import { MovieListPageActions } from './actions';
import { IMovieListPageState } from './interfaces';
import { StoreAction } from '../../../store/model';

const MOVIE_LIST_PAGE_INITIAL_STATE: IMovieListPageState = {
    movies: [],
    filters: {
        byName: null,
        byGenre: [],
    },
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
            };

        case MovieListPageActions.LOAD_SUCCEEDED:
            return {...state, movies: action.payload.movies, loading: false};

        case MovieListPageActions.LOAD_FAILED:
            return {...state};  //TODO add error here as soon as some error component is ready

        case MovieListPageActions.SET_NAME_FILTER:
            return { ...state, filters: { ...state.filters, byName: action.payload.searchInput }};

        case MovieListPageActions.SET_GENRE_FILTER:
            let byGenre = state.filters.byGenre;

            if(action.payload.checked && !byGenre.includes(action.payload.genre)) {
                byGenre.push(action.payload.genre);
            }

            if(!action.payload.checked && byGenre.includes(action.payload.genre)) {
                byGenre.splice(byGenre.indexOf(action.payload.genre), 1);
            }

            return { ...state, filters: { ...state.filters, byGenre: byGenre }};

        default:
            return state;
    }
};
