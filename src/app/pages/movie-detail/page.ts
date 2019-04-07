import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../../api/movies/movie.model';
import { MoviesApiService } from '../../api/movies/movies-api.service';
import { MovieDetailPageActions } from './store/actions';
import { retrieveIdFromUrl } from './store/route-params';

@Component({
    selector: 'mcl-movie-detail-page',
    templateUrl: './page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailPageComponent implements OnInit, OnDestroy {

    @select(['router']) router$: Observable<string>;

    @select(['pages', 'movieDetailPage', 'movie']) movie$: Observable<Movie>;
    @select(['pages', 'movieDetailPage', 'loading']) loading$: Observable<boolean>;

    private routerSubscription: Subscription;

    constructor(private service: MoviesApiService,
                private actions: MovieDetailPageActions,
    ) {
    }

    ngOnInit(): void {
        this.routerSubscription = this.router$
            .filter((route: string) => route.includes('movie-detail'))
            .subscribe((route: string) => {
                this.fetchMovie(retrieveIdFromUrl(route));
            });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
        this.routerSubscription = null;
    }

    fetchMovie(id: number) {
        if (id > 0) {

            this.actions.loadStarted();
            this.service.view(id)
                .subscribe(
                    (movie) => this.actions.loadSucceeded(movie),
                    (err) => console.error('error:', err),
                    () => console.log('fetch completed')
                );
        } else {
            this.actions.loadFailed({message: 'Invalid ID!'});

            return;
        }
    }

    onBackButtonClick() {
        this.actions.goToMovieList();
    }
}
