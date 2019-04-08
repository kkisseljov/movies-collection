import { IMovieListPageState } from '../pages/movie-list/store/interfaces';
import { IMovieDetailPageState } from '../pages/movie-detail/store/interfaces';
import { Action } from 'redux';

export interface IAppState {
  routes?: any;
  pages?: IAppPages;
  errorWell?: {
      message: string;
  }
}

export interface IAppPages {
  movieListPage: IMovieListPageState;
  movieDetailPage: IMovieDetailPageState;
}

export interface StoreAction extends Action {
    payload?: any;
}
