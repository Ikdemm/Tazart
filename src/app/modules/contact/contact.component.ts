import { Component, OnInit } from '@angular/core';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS} from '../../shared/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}
