import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../../api/movies/movie.model';

@Component({
  selector: 'mcl-movie-item',
  templateUrl: './component.html',
})
export class MovieItemComponent implements OnInit {
    @Input() movie: Movie;

    ngOnInit() {

    }
}
