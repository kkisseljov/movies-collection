import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { IMovieListPageState } from '../../store-v2/model';
import { Observable } from 'rxjs';
import { MoviesApiService } from '../../api/movies/movies-api.service';

@Component({
  selector: 'movie-list',
  templateUrl: './page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent implements OnInit {
  @select(['pages', 'movieListPage']) state$: Observable<IMovieListPageState>;

  constructor(private service: MoviesApiService) {
  }

  ngOnInit(): void {
    this.service.list()
      .subscribe(
        (movies) => console.log('fetched movies:', movies),
        (err) => console.error('error:', err),
        () => console.log('fetch completed')
      );
  }
}
