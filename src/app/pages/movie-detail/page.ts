import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { IMovie, Movie } from '../../api/movies/movie.model';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieDetailPageActions } from './store/actions';

@Component({
    selector: 'movie-detail-page',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailPageComponent implements OnInit, OnDestroy {

    @select(['router']) router$: Observable<string>;

    @select(['pages', 'movieDetailPage', 'movie']) movie$: Observable<IMovie>;
    @select(['pages', 'movieDetailPage', 'loading']) loading$: Observable<boolean>;

    private routerSubscription: Subscription;
    private buildMovieModel = (data: IMovie) => !!data ? new Movie(data) : null;

    constructor(private service: MoviesApiService,
                private actions: MovieDetailPageActions,
    ) {
    }

    ngOnInit(): void {
        this.routerSubscription = this.router$
            .filter((route: string) => route.includes('movie-detail'))
            .subscribe((route: string) => {
                this.fetchMovie(this.retrieveIdFromUrl(route));
            });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
        this.routerSubscription = null;
    }

    retrieveIdFromUrl(url: string) {
        const match = url.match(/(?<=\\?id=).*/);
        return !!match && match.length ? +match[0] : -1;
    }

    fetchMovie(id: number) {
        if(id > 0) {

            this.actions.loadStarted();
            this.service.view(id)
                .subscribe(
                    (movie) => this.actions.loadSucceeded(movie),
                    (err) => console.error('error:', err),
                    () => console.log('fetch completed')
                );
        } else {
            this.actions.loadFailed({ message: 'Invalid ID!'});

            return;
        }
    }

    onBackButtonClick() {
        this.actions.goToMovieList();
    }
}
