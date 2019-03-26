import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/component';
import { ErrorWellComponent } from './error-well/component';
import { CounterComponent } from './counter/component';
import { SearchBarComponent } from './search-bar/component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorWellComponent,
    CounterComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SpinnerComponent,
    ErrorWellComponent,
    CounterComponent,
    SearchBarComponent,
  ],
})
export class CoreModule {}
