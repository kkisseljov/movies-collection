import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { movies } from './movie.mock-data';
import { IMovie } from './movie.model';

import 'rxjs/add/operator/delay';


@Injectable()
export class MoviesApiService {

  getDelayTime = () => 500 + Math.random() * 1000;

  view(id: number): Observable<IMovie> {
    return of(movies)
      .map((movies) => movies.find((m: IMovie) => m.id === id));
      //.delay(this.getDelayTime());
  }

  list(): Observable<IMovie[]> {
    return of(movies)
      //.delay(this.getDelayTime());
  }
}
