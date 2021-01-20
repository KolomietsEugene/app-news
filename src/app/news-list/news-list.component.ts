import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news: Array<any> = [];
  filteredNews: Array<any> = [];
  @Input() fValue: string = "";

  // Indexes for pagination
  firstIndex: number = 0;
  lastIndex: number = 10;

  // New for single card
  @Output() singleNew = new EventEmitter<any>();

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getNews()
  }

  @Input() set filterValue(value: string) {
    this.setFilteredNews(value);
  }

  getNews = (): void => {
    this.http.get("news").subscribe(
      response => {
        this.news = JSON.parse(JSON.stringify(response));
        this.setFilteredNews(this.fValue);
      },
      error => console.log(error)
    )
  }

  setFilteredNews = (value: string) => {
    if (value === "")
      this.filteredNews = this.news;
    this.filteredNews = this.news.
      filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    this.initLastIndex();
  }

  initLastIndex = () => this.lastIndex =
    this.filteredNews.length < 10
      ? this.news.length : 10;

  getNewsPage = () => {
    return this.filteredNews.slice(
      this.firstIndex,
      this.lastIndex);
  }

  calcIndexes = (pageIndex: number, pageSize: number) => {
    this.firstIndex = pageIndex * pageSize;
    this.lastIndex = this.lastIndex > this.filteredNews.length ?
      this.filteredNews.length : this.firstIndex + pageSize;
  }

  OnPageChange(event: PageEvent) {
    this.calcIndexes(event.pageIndex, event.pageSize);
  }

  cardClicked(event: any) {
    // console.log(this.filteredNews[event.currentTarget.id])
    this.singleNew.emit(this.filteredNews[event.currentTarget.id])
  }
}
