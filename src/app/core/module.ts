import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/component';
import { ErrorWellComponent } from './error-well/component';
import { ErrorWellActions } from './error-well/store/actions';

@NgModule({
    declarations: [
        SearchBarComponent,
        LoadingSpinnerComponent,
        ErrorWellComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SearchBarComponent,
        LoadingSpinnerComponent,
        ErrorWellComponent,
    ],
    providers: [ErrorWellActions]
})
export class CoreModule {
}
