export interface IMovieListPageState {
  movies: any[];
  filters: IMovieListFilters;
  loading: boolean;
}

export interface IMovieListFilters {
    byName?: string;
    byGenre?: string[];
}
