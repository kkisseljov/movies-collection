import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { IMovie } from '../../../api/movies/movie.model';
import { Action } from 'redux';

export interface MovieListPageAction extends Action {
    payload?: any;
}

@Injectable()
export class MovieListPageActions {
    static readonly LOAD_START = 'MOVIE_LIST_LOAD_STARTED';
    static readonly LOAD_SUCCEEDED = 'MOVIE_LIST_LOAD_SUCCEEDED';
    static readonly LOAD_FAILED = 'MOVIE_LIST_LOAD_FAILED';

    @dispatch()
    loadStarted = (filters?: any) => ({
        type: MovieListPageActions.LOAD_START,
        payload: {filters},
    });

    @dispatch()
    loadSucceeded = (movies: IMovie[]) => ({
        type: MovieListPageActions.LOAD_SUCCEEDED,
        payload: {movies},
    });

    @dispatch()
    loadFailed = (error: any) => ({
        type: MovieListPageActions.LOAD_FAILED,
        payload: {error},
    });
}
