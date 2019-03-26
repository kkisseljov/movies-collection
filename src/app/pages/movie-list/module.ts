import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './page';
import { StoreModule } from '../../store/module';
import { CoreModule } from '../../core/module';
import { MovieItemComponent } from './components/movie-item/component';

@NgModule({
  declarations: [
    MovieListPageComponent,
    MovieItemComponent,
  ],
  exports: [MovieListPageComponent],
  imports: [StoreModule, CoreModule, CommonModule],
})
export class MovieListPageModule {}
