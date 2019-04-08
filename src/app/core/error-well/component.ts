import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { ErrorWellActions } from './store/actions';

@Component({
    selector: 'mcl-error-well',
    template: `<div *ngIf="message$ | async">{{ message$ | async }}</div>`,
})
export class ErrorWellComponent implements OnInit, OnDestroy  {
    @select(['errorWell', 'message']) message$: Observable<string>;
    @select(['router']) router$: Observable<string>;

    private routeSubscription: Subscription;

    constructor(private actions: ErrorWellActions) {}

    ngOnInit(): void {
        // Automatically dismiss the error when switching page
        this.routeSubscription = this.router$
            .subscribe(() => {
                this.actions.dismiss();
            });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
        this.routeSubscription = null;
    }
}
