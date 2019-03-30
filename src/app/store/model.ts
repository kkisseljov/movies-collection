import { IMovieListPageState } from '../pages/movie-list/store/interfaces';

export interface IAppState {
  routes?: any;
  pages?: IAppPages;
}

export interface IAppPages {
  movieListPage: IMovieListPageState;
  movieDetailPage: IMovieDetailPageState;
}

export interface IMovieDetailPageState {
  movie: any;
}
