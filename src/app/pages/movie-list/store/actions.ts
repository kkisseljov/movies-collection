import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { GenreType, IMovie } from '../../../api/movies/movie.model';
import { UPDATE_LOCATION } from '@angular-redux/router';

@Injectable()
export class MovieListPageActions {
    static readonly LOAD_START = 'MOVIE_LIST_LOAD_STARTED';
    static readonly LOAD_SUCCEEDED = 'MOVIE_LIST_LOAD_SUCCEEDED';
    static readonly LOAD_FAILED = 'MOVIE_LIST_LOAD_FAILED';

    static readonly SET_NAME_FILTER = 'MOVIE_LIST_SET_NAME_FILTER';
    static readonly SET_GENRE_FILTER = 'MOVIE_LIST_SET_GENRE_FILTER';

    @dispatch()
    loadStarted = () => ({
        type: MovieListPageActions.LOAD_START,
    });

    @dispatch()
    loadSucceeded = (movies: IMovie[]) => ({
        type: MovieListPageActions.LOAD_SUCCEEDED,
        payload: { movies },
    });

    @dispatch()
    loadFailed = (error: any) => ({
        type: MovieListPageActions.LOAD_FAILED,
        payload: { error },
    });

    @dispatch()
    setNameFilter = (searchInput?: string) => ({
        type: MovieListPageActions.SET_NAME_FILTER,
        payload: { searchInput },
    });

    @dispatch()
    setGenreFilter = (genre: GenreType, checked: boolean) => ({
        type: MovieListPageActions.SET_GENRE_FILTER,
        payload: { genre, checked },
    });

    @dispatch()
    goToMovieDetailPage = (movieId: number) => ({
        type: UPDATE_LOCATION,
        payload: '/movie-detail?id=' + movieId,
    });
}
