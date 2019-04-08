import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { movieListPageReducer } from '../pages/movie-list/store/reducers';
import { movieDetailPageReducer } from '../pages/movie-detail/store/reducers';
import { errorWellReducer } from '../core/error-well/store/reducers';

const pageReducers = combineReducers({
    movieListPage: movieListPageReducer,
    movieDetailPage: movieDetailPageReducer,
});

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        router: routerReducer,
        pages: pageReducers,
        errorWell: errorWellReducer,
    }));
