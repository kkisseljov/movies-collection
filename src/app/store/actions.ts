export const SET_MOVIE_NAME_FILTER = 'SET_MOVIE_NAME_FILTER';
export const SET_MOVIE_GENRE_FILTER = 'SET_MOVIE_GENRE_FILTER';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export interface IAction {
  type: string;
}

export const getFetchMoviesAction = (filters, pagination) => ({
  action: FETCH_MOVIES,
  payload: { filters, pagination },
});
