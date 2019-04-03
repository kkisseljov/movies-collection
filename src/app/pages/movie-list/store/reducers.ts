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
            return {...state,
                loading: true,
                movies: [],
            };

        case MovieListPageActions.LOAD_SUCCEEDED:
            return {...state, movies: action.payload.movies, loading: false};

        case MovieListPageActions.LOAD_FAILED:
            return {...state};  //TODO add error here as soon as some error component is ready

        default:
            return state;
    }
};
