import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieListPageActions } from './store/actions';
import { IMovie } from "../../api/movies/movie.model";

@Component({
    selector: 'movie-list',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent implements OnInit {
    @select(['pages', 'movieListPage', 'movies']) movies$: Observable<IMovie[]>;
    @select(['pages', 'movieListPage', 'loading']) loading$: Observable<boolean>;

    constructor(private service: MoviesApiService, private actions: MovieListPageActions) {
    }

    ngOnInit(): void {
        this.fetchMovies();

        this.movies$.subscribe((n) => console.log('stored movies:', n));
    }

    fetchMovies() {
        this.actions.loadStarted();
        this.service.list()
            .subscribe(
                (movies) => {
                    this.actions.loadSucceeded(movies);
                },
                (err) => console.error('error:', err),
                () => console.log('fetch completed')
            );
    }
}
