import { IMovieDetailPageState } from './interfaces';
import { StoreAction } from '../../../store/model';
import { MovieDetailPageActions } from './actions';

const MOVIE_DETAIL_PAGE_INITIAL_STATE: IMovieDetailPageState = {
    movie: null,
    loading: false,
};

export const movieDetailPageReducer = (
    state: IMovieDetailPageState = MOVIE_DETAIL_PAGE_INITIAL_STATE,
    action: StoreAction
) => {
    switch (action.type) {
        case MovieDetailPageActions.LOAD_START:
            return {
                ...state,
                loading: true,
                movie: null,
            };

        case MovieDetailPageActions.LOAD_SUCCEEDED:
            return {
                ...state,
                movie: action.payload.movie,
                loading: false
            };

        case MovieDetailPageActions.LOAD_FAILED:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};
