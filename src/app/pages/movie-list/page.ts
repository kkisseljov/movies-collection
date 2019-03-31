import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieListPageActions } from './store/actions';
import { IMovie } from '../../api/movies/movie.model';
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

    constructor(private service: MoviesApiService,
                private actions: MovieListPageActions
    ) {
    }

    ngOnInit(): void {
        this.fetchMovies();
    }

    fetchMovies(filters?: IMovieListFilters) {
        this.actions.loadStarted(filters);
        this.service.list(filters)
            .subscribe(
                (movies) => this.actions.loadSucceeded(movies),
                (err) => console.error('error:', err),
                () => console.log('fetch completed')
            );
    }

    onNameFilterChange(value: string) {
        this.fetchMovies(!!value ? { byName: value } : null);
    }
}
