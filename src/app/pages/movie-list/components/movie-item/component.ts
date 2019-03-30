import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../../../api/movies/movie.model';

@Component({
  selector: 'movie-item',
  templateUrl: './component.html',
})
export class MovieItemComponent implements OnInit {
    @Input() movie: any;

    ngOnInit() {

    }

    getMovieImg() {
        return 'assets/images/movie-covers/' + this.movie.img;
    }
}
