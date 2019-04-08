import { IMovieListPageState } from '../pages/movie-list/store/interfaces';
import { IMovieDetailPageState } from '../pages/movie-detail/store/interfaces';
import { Action } from 'redux';
import { IErrorWell } from '../core/error-well/store/interface';

export interface IAppState {
  routes?: any;
  pages?: IAppPages;
  errorWell?: IErrorWell;
}

export interface IAppPages {
  movieListPage: IMovieListPageState;
  movieDetailPage: IMovieDetailPageState;
}

export interface StoreAction extends Action {
    payload?: any;
}
