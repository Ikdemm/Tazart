import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS} from '../../shared/constants';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  news;
  frenchNews;
  lang;
  subscription;

  constructor(private newsService: NewsService, private languageService: LanguageService) { 
    this.subscription = this.languageService.getLanguage()
    .subscribe(lang => this.lang = lang);
  }

  ngOnInit() {
    this.newsService.getNews().subscribe( data => {
      this.news = data;
    });   
    this.newsService.getFrenchNews().subscribe( data => {
      this.frenchNews = data;
    }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
