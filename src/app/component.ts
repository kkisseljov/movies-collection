import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'mcl-root',
    templateUrl: './component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'Movie collection';
}
