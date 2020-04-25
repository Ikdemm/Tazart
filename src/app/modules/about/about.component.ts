import { Component, OnInit } from '@angular/core';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS} from '../../shared/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
  }

}
