import { MovieListPageActions } from './actions';
import { IMovieListPageState } from './interfaces';
import { StoreAction } from '../../../store/model';

const MOVIE_LIST_PAGE_INITIAL_STATE: IMovieListPageState = {
    movies: [],
    loading: false,
};

export const movieListPageReducer = (
    state: IMovieListPageState = MOVIE_LIST_PAGE_INITIAL_STATE,
    action: StoreAction
) => {
    switch (action.type) {
        case MovieListPageActions.LOAD_START:
            return {
                ...state,
                loading: true,
                movies: action.payload.clearList ? [] : state.movies,
            };

        case MovieListPageActions.LOAD_SUCCEEDED:
            const pagination = action.payload.results.pagination;
            const movies = state.movies;

            // Check that we don't have records from requested page
            // just for case if the same page is requested several times for some reason
            if (movies.length < pagination.getRecordIndexes().end) {
                movies.push(...action.payload.results.movies);
            }

            return {
                ...state,
                movies,
                loading: false
            };

        case MovieListPageActions.LOAD_FAILED:
            return {...state};  // TODO add error here as soon as some error component is ready

        default:
            return state;
    }
};
