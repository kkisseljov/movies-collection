import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: './component.html',
})
export class SearchBarComponent implements OnInit {
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
