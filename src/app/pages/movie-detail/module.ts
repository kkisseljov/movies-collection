import { NgModule } from '@angular/core';
import { MovieDetailPageComponent } from './page';
import { StoreModule } from '../../store/module';

@NgModule({
  declarations: [MovieDetailPageComponent],
  exports: [MovieDetailPageComponent],
  imports: [StoreModule],
})
export class MovieDetailPageModule {}
