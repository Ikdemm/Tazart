import { Component, OnInit } from '@angular/core';
//import { BACKGROUNDS } from '../shared/constants';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../shared/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*slides = [
    {
      background : BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)],
      header : "Contactez Tazart Maintenant",
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
