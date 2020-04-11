import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../../shared/constants';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  products = [];
  data;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getData().subscribe( data => {
      console.log(data);
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
