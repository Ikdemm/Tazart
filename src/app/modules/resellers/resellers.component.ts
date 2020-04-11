import { Component, OnInit } from '@angular/core';
//import { BACKGROUNDS } from '../../shared/constants';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../shared/constants';

@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrls: ['./resellers.component.css']
})
export class ResellersComponent implements OnInit {

  /*slides = [
    {
      background : BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)],
      header : "Trouver nos produits chez ces Revendeurs",
      text: "Tazart est toujours proche de vous"
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
  };*/

  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}
