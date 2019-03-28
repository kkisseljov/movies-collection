import { combineReducers, Action } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { IMovieListPageState } from './model';
import { FETCH_MOVIES } from './actions';
import { movies } from '../api/movies/movie.mock-data';

const MOVIE_LIST_INITIAL_STATE: IMovieListPageState = {
  movies: [],
  filters: {
    byName: null,
    byGenre: [],
  }
};

export const movieListReducer = (
  state: IMovieListPageState = MOVIE_LIST_INITIAL_STATE,
  action: Action
) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies,
      };
    default: {
      return state;
    }
  }
};

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router: routerReducer,
  }));
