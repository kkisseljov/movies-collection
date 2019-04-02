import { NgModule } from '@angular/core';
import { MovieDetailPageComponent } from './page';
import { StoreModule } from '../../store/module';
import { CoreModule } from '../../core/module';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../../api/module';
import { MovieDetailPageActions } from './store/actions';
import { MovieDetailViewComponent } from './components/movie-detail-view/component';

@NgModule({
    declarations: [
        MovieDetailPageComponent,
        MovieDetailViewComponent,
    ],
    exports: [MovieDetailPageComponent],
    imports: [
        StoreModule,
        CoreModule,
        CommonModule,
        ApiModule,
    ],
    providers: [MovieDetailPageActions]
})
export class MovieDetailPageModule {
}
