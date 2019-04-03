import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from "./loading-spinner/component";

@NgModule({
    declarations: [
        SearchBarComponent,
        LoadingSpinnerComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SearchBarComponent,
        LoadingSpinnerComponent,
    ],
})
export class CoreModule {
}
