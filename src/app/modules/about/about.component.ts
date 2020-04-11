import { Component, OnInit } from '@angular/core';
//import { BACKGROUNDS } from '../../shared/constants';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../shared/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*slides = [
    {
      background : BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)],
      header : "A propos Tazart",
    }
  ];

  slideOptions = {
    items: 1, 
    dots: false, 
    nav: false, 
    autoplay: false, 
    autoplayTimeout: 3000,
    fluidSpeed: false,
    loop: false
  };

  carouselOptions = {
    items: 1,
    dots: false,
    nav: false
  }*/

  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}
