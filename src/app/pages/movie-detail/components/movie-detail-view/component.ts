import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../../api/movies/movie.model';

@Component({
    selector: 'movie-detail-view',
    templateUrl: './component.html',
})
export class MovieDetailViewComponent implements OnInit {
    @Input() movie: Movie;

    ngOnInit() {

    }
}
