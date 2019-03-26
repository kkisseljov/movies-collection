import { NgModule } from '@angular/core';
import { MovieListPageComponent } from './page';
import { StoreModule } from '../../store/module';
import { CoreModule } from '../../core/module';

@NgModule({
  declarations: [MovieListPageComponent],
  exports: [MovieListPageComponent],
  imports: [StoreModule, CoreModule],
})
export class MovieListPageModule {}
