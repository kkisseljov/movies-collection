import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieListPageActions } from './store/actions';
import { GenreType, genreType, IMovie, Movie } from '../../api/movies/movie.model';
import { IMovieListFilters } from './store/interfaces';

@Component({
    selector: 'movie-list-page',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent implements OnInit, OnDestroy {
    @select(['pages', 'movieListPage', 'movies']) movies$: Observable<IMovie[]>;
    @select(['pages', 'movieListPage', 'loading']) loading$: Observable<boolean>;

    @select(['pages', 'movieListPage', 'filters', 'byName']) nameFilter$: Observable<string>;
    @select(['pages', 'movieListPage', 'filters', 'byGenre']) genreFilter$: Observable<GenreType[]>;

    @select(['pages', 'movieListPage', 'filters']) filters$: Observable<IMovieListFilters>;

    genres = Object.keys(genreType);

    private filterSubscription: Subscription;
    private buildMovieModel = (data: IMovie) => !!data ? new Movie(data) : null;

    constructor(private service: MoviesApiService,
                private actions: MovieListPageActions
    ) {
    }

    ngOnInit(): void {
        this.fetchMovies();

        this.filterSubscription = this.filters$.subscribe((filters) => {
            this.fetchMovies(filters);
        });
    }

    ngOnDestroy(): void {
        this.filterSubscription.unsubscribe();
        this.filterSubscription = null;
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
        this.actions.setNameFilter(value);
    }

    onGenreFilterChange(e) {
        this.actions.setGenreFilter(e.srcElement.value, e.srcElement.checked);
    }

    onMovieClick(e) {
        console.log('movie clicked:', e);
        this.actions.goToMovieDetailPage(e.id);
    }
}
