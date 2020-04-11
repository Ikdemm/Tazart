import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements OnInit {

  news;

  getNews() {
    return this.http.get('assets/data/mock-news.json');
  }

  ngOnInit() {
    this.getNews;
  }

  constructor(private http: HttpClient) { }

}
