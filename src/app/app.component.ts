
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterValue: string = "";

  isCardClicked: boolean = false;
  singleNew = {};

  ngOnInit() {
    const filter = localStorage.getItem('localFilterStr');
    this.filterValue = filter ? filter : "";
    this.setFilter(this.filterValue);
  }

  constructor() {

  }

  setFilter(value: string) {
    this.filterValue = value;
    localStorage.setItem('localFilterStr', value)
  }

  getNew(singleNew: any) {
    console.log(singleNew)
    this.isCardClicked = !this.isCardClicked;
    this.singleNew = singleNew;
  }

  isBack(back: boolean) {
    if (back) this.isCardClicked = !this.isCardClicked;
  }
}
