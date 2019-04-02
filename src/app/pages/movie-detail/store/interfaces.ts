import { IMovie } from '../../../api/movies/movie.model';

export interface IMovieDetailPageState {
    movie?: IMovie;
    loading: false;
}
