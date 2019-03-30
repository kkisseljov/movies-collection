export interface IMovieListPageState {
  movies: any[];
  filters: {
    byName: string;
    byGenre: string[];
  };
  loading: boolean;
}
