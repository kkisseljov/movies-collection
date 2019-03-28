export interface IAppState {
  routes?: any;
  pages?: IAppPages;
}

export interface IAppPages {
  movieListPage: IMovieListPageState;
  movieDetailPage: IMovieDetailPageState;
}

export interface IMovieListPageState {
  movies: any[];
  filters: {
    byName: string;
    byGenre: string[];
  };
}

export interface IMovieDetailPageState {
  movie: any;
}
