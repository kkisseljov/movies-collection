import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './page';
import { StoreModule } from '../../store-v2/module';
import { CoreModule } from '../../core/module';
import { MovieItemComponent } from './components/movie-item/component';
import { ApiModule } from '../../api/module';

@NgModule({
  declarations: [
    MovieListPageComponent,
    MovieItemComponent,
  ],
  exports: [MovieListPageComponent],
  imports: [StoreModule, CoreModule, CommonModule, ApiModule],
})
export class MovieListPageModule {}
