import { Component, OnInit } from '@angular/core';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  /*slides = [
    {
      background : BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)],
      header : "Bienvenue à Tazart",
      text: "Les fruits du Désert"
    },
    {
      background : BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)],
      header : "Le désert attire le Nomade",
      text: "L'océan, Le Matelot. L'infini, Le Poète"
    }
  ];*/
  
  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor() {}

  ngOnInit() {}

}
