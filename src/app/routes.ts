import { MovieDetailPageComponent } from './pages/movie-detail/page';
import { MovieListPageComponent } from './pages/movie-list/page';

export const appRoutes = [
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListPageComponent },
  { path: 'movie-detail', component: MovieDetailPageComponent },
];
