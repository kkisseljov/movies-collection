import { Output, EventEmitter, Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'mcl-search-bar',
    templateUrl: './component.html',
})
export class SearchBarComponent implements OnInit {
    @Input() value = '';
    @Output() onSearch$ = new EventEmitter<string>();

    searchInputControl = new FormControl();

    ngOnInit() {
        this.searchInputControl
            .valueChanges
            .distinctUntilChanged()
            .debounceTime(400)
            .subscribe((value) => this.onSearch$.emit(value));
    }
}
