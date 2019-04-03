import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieListPageActions } from './store/actions';
import { GenreType, genreType, IMovie, Movie } from '../../api/movies/movie.model';
import { IMovieListFilters } from './store/interfaces';
import { filtersFromUrl } from './store/route-params';

@Component({
    selector: 'movie-list-page',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent implements OnInit, OnDestroy {

    @select(['router']) router$: Observable<string>;

    @select(['pages', 'movieListPage', 'movies']) movies$: Observable<IMovie[]>;
    @select(['pages', 'movieListPage', 'loading']) loading$: Observable<boolean>;

    genres = Object.keys(genreType);

    private routeSubscription: Subscription;
    private filters: IMovieListFilters = { byName: null, byGenre: []} as IMovieListFilters;
    private buildMovieModel = (data: IMovie) => !!data ? new Movie(data) : null;

    constructor(private service: MoviesApiService,
                private actions: MovieListPageActions
    ) {
    }

    ngOnInit(): void {
        this.routeSubscription = this.router$
            .filter((route: string) => route.includes('movie-list'))
            .subscribe((route: string) => {
                const params = route.substring(11);
                this.filters = filtersFromUrl(params);
                this.fetchMovies(this.filters);
            });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
        this.routeSubscription = null;
    }

    fetchMovies(filters?: IMovieListFilters) {
        this.actions.loadStarted();
        this.service.list(filters)
            .subscribe(
                (movies) => this.actions.loadSucceeded(movies),
                (err) => console.error('error:', err),
                () => console.log('fetch completed')
            );
    }

    onNameFilterChange(value: string) {
        this.actions.updateFilters({ ...this.filters, byName: value });
    }

    onGenreFilterChange(e) {
        const { value, checked } = e.srcElement;
        let byGenre = this.filters.byGenre;

        if(checked && !byGenre.includes(value)) {
            byGenre.push(value);
        }

        if(!checked && byGenre.includes(value)) {
            byGenre.splice(byGenre.indexOf(value), 1);
        }

        this.actions.updateFilters({ ...this.filters, byGenre });
    }

    onMovieClick(movie: IMovie) {
        this.actions.goToMovieDetailPage(movie.id);
    }

    isGenreChecked(genre: GenreType) {
        return this.filters.byGenre.includes(genre);
    }
}
