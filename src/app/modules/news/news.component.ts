import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../shared/constants';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  news;

  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe( data => {
      this.news = data;
    });    
  }

}
