import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'Movie collection';
}
