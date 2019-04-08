import { NgModule } from '@angular/core';
import { MoviesApiService } from './movies/movies-api.service';

@NgModule({
    providers: [MoviesApiService],
})
export class ApiModule {
}
