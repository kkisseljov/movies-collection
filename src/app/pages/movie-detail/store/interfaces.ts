import { Movie } from '../../../api/movies/movie.model';

export interface IMovieDetailPageState {
    movie?: Movie;
    loading: boolean;
}
