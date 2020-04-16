import { Component, OnInit } from '@angular/core';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from 'src/app/shared/constants';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css']
})

export class ProfessionalListComponent implements OnInit {

  products = [];
  data;

  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(private productsService: ProductsService) { }

  /*getIndex(products: Array<object>, product) {
    return products.findIndex(x => x.designation === "Skeet");
  }*/

  ngOnInit() {
    this.productsService.getData().subscribe( data => {
      this.data = data;
      this.getProducts();
      console.log(this.products);
    })
  }

  getProducts() {
    this.data.forEach(category => {
      category.elements.forEach(element => {
        element.products.forEach(product => {
          this.products.push(product);
        });
      });        
    });
  }

}

