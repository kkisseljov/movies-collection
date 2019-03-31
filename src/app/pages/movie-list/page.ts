import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieListPageActions } from './store/actions';
import { GenreType, genreType, IMovie } from '../../api/movies/movie.model';
import { IMovieListFilters } from './store/interfaces';

@Component({
    selector: 'movie-list',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent implements OnInit {
    @select(['pages', 'movieListPage', 'movies']) movies$: Observable<IMovie[]>;
    @select(['pages', 'movieListPage', 'loading']) loading$: Observable<boolean>;

    @select(['pages', 'movieListPage', 'filters', 'byName']) nameFilter$: Observable<string>;
    @select(['pages', 'movieListPage', 'filters', 'byGenre']) genreFilter$: Observable<GenreType[]>;

    @select(['pages', 'movieListPage', 'filters']) filters$: Observable<IMovieListFilters>;

    genres = Object.keys(genreType);

    constructor(private service: MoviesApiService,
                private actions: MovieListPageActions
    ) {
    }

    ngOnInit(): void {
        this.fetchMovies();

        this.filters$.subscribe((filters) => {
            console.log('filters changed:', filters);
            this.fetchMovies(filters);
        });
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
        console.log(e);
        this.actions.setGenreFilter(e.srcElement.value, e.srcElement.checked);
    }
}
