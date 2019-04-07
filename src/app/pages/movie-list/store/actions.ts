import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { IPaginatedMovieList } from '../../../api/movies/movie.model';
import { UPDATE_LOCATION } from '@angular-redux/router';
import { filtersToUrlParams } from './route-params';
import { IMovieListFilters } from './interfaces';

@Injectable()
export class MovieListPageActions {
    static readonly LOAD_START = 'MOVIE_LIST_LOAD_STARTED';
    static readonly LOAD_SUCCEEDED = 'MOVIE_LIST_LOAD_SUCCEEDED';
    static readonly LOAD_FAILED = 'MOVIE_LIST_LOAD_FAILED';

    @dispatch()
    loadStarted = (clearList: boolean = true) => ({
        type: MovieListPageActions.LOAD_START,
        payload: { clearList },
    });

    @dispatch()
    loadSucceeded = (results: IPaginatedMovieList) => ({
        type: MovieListPageActions.LOAD_SUCCEEDED,
        payload: { results },
    });

    @dispatch()
    loadFailed = (error: any) => ({
        type: MovieListPageActions.LOAD_FAILED,
        payload: { error },
    });

    @dispatch()
    goToMovieDetailPage = (movieId: number) => ({
        type: UPDATE_LOCATION,
        payload: '/movie-detail?id=' + movieId,
    });

    @dispatch()
    updateFilters = (filters: IMovieListFilters) => ({
        type: UPDATE_LOCATION,
        payload: '/movie-list' + filtersToUrlParams(filters),
    });
}
