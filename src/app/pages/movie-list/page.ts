import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, HostListener, EventEmitter } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieListPageActions } from './store/actions';
import { GenreType, genreType, IMovie, Movie, Pagination } from '../../api/movies/movie.model';
import { IMovieListFilters } from './store/interfaces';
import { filtersFromUrl } from './store/route-params';

@Component({
    selector: 'mcl-movie-list-page',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent implements OnInit, OnDestroy {

    @select(['router']) router$: Observable<string>;

    @select(['pages', 'movieListPage', 'movies']) movies$: Observable<Movie[]>;
    @select(['pages', 'movieListPage', 'loading']) loading$: Observable<boolean>;

    genres = Object.keys(genreType);

    private filters: IMovieListFilters = {byName: null, byGenre: []} as IMovieListFilters;
    private pagination: Pagination;

    private infiniteScroll$: EventEmitter<any> = new EventEmitter<any>();

    private infiniteScrollSubscription: Subscription;
    private routeSubscription: Subscription;

    constructor(private service: MoviesApiService,
                private actions: MovieListPageActions
    ) {
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const {
            scrollTop,
            scrollHeight,
            clientHeight,
        } = document.documentElement;

        if (scrollTop + clientHeight === scrollHeight) {
            this.infiniteScroll$.emit();
        }
    }

    ngOnInit(): void {
        this.routeSubscription = this.router$
            .filter((route: string) => route.includes('/movie-list'))
            .subscribe((route: string) => {
                console.log('YYY fetch onRouteChange');

                const params = route.substring('/movie-list'.length);

                this.filters = filtersFromUrl(params);
                this.pagination = null;

                this.actions.loadStarted(true);
                this.fetchMovies(this.filters);
            });

        // Wait until loading is finished when we are scrolling to bottom of the screen
        // to fetch the next part of movies if there are more to get
        this.infiniteScrollSubscription = this.infiniteScroll$
            .flatMap(() => this.loading$)
            // .filter((loading) => !loading)
            .subscribe((loading) => {
                if (!loading && this.pagination && !this.pagination.isLastPage()) {
                    console.log('YYY fetch onInfiniteScroll:', {pagination: {...this.pagination}});
                    this.actions.loadStarted(false);
                    this.pagination.pageNumber++;
                    this.fetchMovies(this.filters, this.pagination.pageNumber);
                } else {
                    console.log('YYY fetch onInfiniteScroll -> ignored:', {loading, pagination: {...this.pagination}});
                }
            });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
        this.routeSubscription = null;

        this.infiniteScrollSubscription.unsubscribe();
        this.infiniteScrollSubscription = null;
    }

    fetchMovies(filters?: IMovieListFilters, page = 1) {
        this.service.list(filters, page)
            .subscribe(
                (results) => {
                    this.pagination = results.pagination;
                    this.actions.loadSucceeded(results);
                },
                (err) => console.error('error:', err),
                () => console.log('fetch completed')
            );
    }

    onNameFilterChange(value: string) {
        this.actions.updateFilters({...this.filters, byName: value});
    }

    onGenreFilterChange(e) {
        const {value, checked} = e.srcElement;
        const byGenre = this.filters.byGenre;

        if (checked && !byGenre.includes(value)) {
            byGenre.push(value);
        }

        if (!checked && byGenre.includes(value)) {
            byGenre.splice(byGenre.indexOf(value), 1);
        }

        this.actions.updateFilters({...this.filters, byGenre});
    }

    onMovieClick(movie: IMovie) {
        this.actions.goToMovieDetailPage(movie.id);
    }

    isGenreChecked(genre: GenreType) {
        return this.filters.byGenre.includes(genre);
    }
}
