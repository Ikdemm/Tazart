import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  getNews() {
    return this.http.get('assets/data/mock-news.json');
  }

  getFrenchNews() {
    return this.http.get('assets/data/mock-news-fr.json');
  }

  constructor(private http: HttpClient) { }

}
