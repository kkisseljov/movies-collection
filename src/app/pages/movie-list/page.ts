import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPageComponent {
  movies: any[] = [1,2,3];  //TODO temp
}
