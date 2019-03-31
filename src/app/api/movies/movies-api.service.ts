import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { movies } from './movie.mock-data';
import { IMovie } from './movie.model';
import { IMovieListFilters } from '../../pages/movie-list/store/interfaces';

import 'rxjs/add/operator/delay';


@Injectable()
export class MoviesApiService {

    getDelayTime = () => 500 + Math.random() * 1000;

    view(id: number): Observable<IMovie> {
        return of(movies)
            .map((movies) => movies.find((m: IMovie) => m.id === id))
            .delay(this.getDelayTime());
    }

    list(filters?: IMovieListFilters): Observable<IMovie[]> {
        return of(movies)
            .map((movies: IMovie[]) => {
                if(!!filters) {

                    if (!!filters.byName) {
                        movies = movies.filter(m =>
                            m.name.toLowerCase().includes(filters.byName.toLowerCase())
                        );
                    }

                    if (!!filters.byGenre && filters.byGenre.length) {
                        movies = movies.filter(m => {
                                let matchedGenres = m.genres.filter(g => filters.byGenre.includes(g));
                                return matchedGenres.length;
                            }
                        );
                    }
                }

                return movies;
            })
            .delay(this.getDelayTime());
    }
}
