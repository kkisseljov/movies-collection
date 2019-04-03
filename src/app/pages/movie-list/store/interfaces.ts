import { GenreType, Movie } from '../../../api/movies/movie.model';

export interface IMovieListPageState {
  movies: Movie[];
  loading: boolean;
}

export interface IMovieListFilters {
    byName?: string;
    byGenre?: GenreType[];
}
