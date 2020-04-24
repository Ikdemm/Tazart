import { Component, OnInit } from '@angular/core';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../shared/constants';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang('fr');
  }

  ngOnInit() {
  }

}
