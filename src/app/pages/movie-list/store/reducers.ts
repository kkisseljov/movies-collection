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
            console.log('action.payload.clearList:', action.payload.clearList);
            return {...state,
                loading: true,
                movies: action.payload.clearList ? [] : state.movies,
            };

        case MovieListPageActions.LOAD_SUCCEEDED:
            const currentPage = action.payload.results.pagination.pageNumber;
            let movies = state.movies;

            //There is a way to mess up with events and get many calls for this action
            //which makes the list having many duplicates
            //TODO fix events or improve this check to clear this situation
            if(!movies.length || currentPage > 1) {
                movies.push(...action.payload.results.movies);
            }

            return {...state,
                movies,
                loading: false
            };

        case MovieListPageActions.LOAD_FAILED:
            return {...state};  //TODO add error here as soon as some error component is ready

        default:
            return state;
    }
};
