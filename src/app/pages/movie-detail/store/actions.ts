import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { IMovie } from '../../../api/movies/movie.model';

@Injectable()
export class MovieDetailPageActions {
    static readonly LOAD_START = 'MOVIE_DETAIL_LOAD_STARTED';
    static readonly LOAD_SUCCEEDED = 'MOVIE_DETAIL_LOAD_SUCCEEDED';
    static readonly LOAD_FAILED = 'MOVIE_DETAIL_LOAD_FAILED';

    @dispatch()
    loadStarted = () => ({
        type: MovieDetailPageActions.LOAD_START,
    });

    @dispatch()
    loadSucceeded = (movie: IMovie) => ({
        type: MovieDetailPageActions.LOAD_SUCCEEDED,
        payload: { movie },
    });

    @dispatch()
    loadFailed = (error: any) => ({
        type: MovieDetailPageActions.LOAD_FAILED,
        payload: { error },
    });
}
