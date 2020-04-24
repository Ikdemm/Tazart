import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS} from 'src/app/shared/constants';
import { ActivatedRoute, Params } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  product;
  products = [];
  data;
  
  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.spinner.show();
    this.productsService.getData().subscribe(data => {
      this.data = data;
      this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params['designation']);
          let found = false;
          this.data.forEach(category => {
            category.elements.forEach(element => {
              element.products.forEach(product => {
                if (!found) {
                  this.product = element.products.find(product => product.designation == params['designation']);              
                  console.log(this.product);
                  if (this.product) {
                    found = true;
                    this.spinner.hide();
                  }
                }
              });
            });
          });
      })
    })
  }

}
