import { ElephantPageComponent } from './elephants/page';
import { LionPageComponent } from './lions/page';
import { FeedbackFormComponent } from './feedback/page';
import { MovieDetailPageComponent } from './pages/movie-detail/page';
import { MovieListPageComponent } from './pages/movie-list/page';

export const appRoutes = [
  // { path: '', redirectTo: '/elephants', pathMatch: 'full' },
  // { path: 'elephants', component: ElephantPageComponent },
  // { path: 'lions', component: LionPageComponent },
  // { path: 'feedback', component: FeedbackFormComponent },

  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListPageComponent },
  { path: 'movie-detail', component: MovieDetailPageComponent },
];
