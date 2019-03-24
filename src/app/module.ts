import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// This app's ngModules
import { StoreModule } from './store/module';
import { AnimalModule } from './animals/module';
import { ElephantModule } from './elephants/module';
import { LionModule } from './lions/module';
import { FeedbackModule } from './feedback/module';
import { MovieListPageModule } from './pages/movie-list/module';
import { MovieDetailPageModule } from './pages/movie-detail/module';

// Top-level app component constructs.
import { appRoutes } from './routes';
import { AppComponent } from './component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    AnimalModule,
    ElephantModule,
    LionModule,
    FeedbackModule,
    MovieListPageModule,
    MovieDetailPageModule,
    StoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
