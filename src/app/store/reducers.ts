import { combineReducers, Action } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { movieListPageReducers } from '../pages/movie-list/store/reducers';

const pageReducers = combineReducers({
    movieListPage: movieListPageReducers,
});

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        router: routerReducer,
        pages: pageReducers,
    }));
