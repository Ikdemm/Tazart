import { Component, OnInit } from '@angular/core';
//import { BACKGROUNDS } from '../../shared/constants';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS } from '../../shared/constants';

@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrls: ['./resellers.component.css']
})
export class ResellersComponent implements OnInit {

  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}
