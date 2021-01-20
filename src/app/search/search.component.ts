import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() filterOutputStr = new EventEmitter<string>();
  @Input() value = '';
  filterUpdate = new Subject<any>();

  constructor() {
    this.filterUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.passFilter(value);
      });
  }

  ngOnInit(): void {
  }

  passFilter(value: string) {
    this.filterOutputStr.emit(value);
  }

  clear() {
    this.value = "";
    this.passFilter("");
  }
}
