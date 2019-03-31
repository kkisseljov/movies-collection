import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './page';
import { StoreModule } from '../../store/module';
import { CoreModule } from '../../core/module';
import { MovieItemComponent } from './components/movie-item/component';
import { ApiModule } from '../../api/module';
import { MovieListPageActions } from './store/actions';

@NgModule({
    declarations: [
        MovieListPageComponent,
        MovieItemComponent,
    ],
    exports: [MovieListPageComponent],
    imports: [
        StoreModule,
        CoreModule,
        CommonModule,
        ApiModule
    ],
    providers: [MovieListPageActions]
})
export class MovieListPageModule {
}
