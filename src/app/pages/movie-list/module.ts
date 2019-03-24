import { NgModule } from '@angular/core';
import { MovieListPageComponent } from './page';
import { StoreModule } from '../../store/module';

@NgModule({
  declarations: [MovieListPageComponent],
  exports: [MovieListPageComponent],
  imports: [StoreModule],
})
export class MovieListPageModule {}
