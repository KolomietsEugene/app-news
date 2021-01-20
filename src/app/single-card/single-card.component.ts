import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input() singleNew: any = {};
  @Output() back = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  backToNews() {
    this.back.emit(true);
  }
}
