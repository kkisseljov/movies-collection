import { GenreType } from '../../../api/movies/movie.model';

export interface IMovieListPageState {
  movies: any[];
  loading: boolean;
}

export interface IMovieListFilters {
    byName?: string;
    byGenre?: GenreType[];
}
