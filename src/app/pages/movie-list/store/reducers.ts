import { combineReducers, Action, Reducer } from 'redux';
import { MovieListPageAction, MovieListPageActions } from './actions';
import { IMovieListPageState } from './interfaces';

const MOVIE_LIST_PAGE_INITIAL_STATE: IMovieListPageState = {
    movies: [],
    filters: {
        byName: null,
        byGenre: [],
    },
    loading: false,
};

export const moviesReducers = (
    state: IMovieListPageState = MOVIE_LIST_PAGE_INITIAL_STATE,
    action: MovieListPageAction   //TODO needs some types
) => {
    switch (action.type) {
        case MovieListPageActions.LOAD_START:
            return {...state, loading: true};
        case MovieListPageActions.LOAD_SUCCEEDED:
            return {...state, movies: action.payload.movies, loading: false};
        case MovieListPageActions.LOAD_FAILED:
            return {...state};  //TODO add error here as soon as some error component is ready
        default:
            return state;
    }
};


// export const movieListPageReducers = combineReducers({
//     movies: moviesReducers,
//     loading:
// });
