import { Component, OnInit, ɵConsole} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CAROUSEL_OPTIONS, SLIDE_OPTIONS} from '../../../shared/constants';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  segmentName;
  segments;
  segment;
  products = [];
  data;

  slideOptions = SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }


  fetchProducts() {
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.productsService.getData().subscribe(data => {
      this.data = data;
      this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params['name']);
          let found = false;
          this.data.forEach(category => {
            if (!found) {
              this.segment = category.elements.find(segment => segment.name == params['name']);              
              console.log(this.segment);
              if (this.segment) {
                this.products = this.segment.products;
                console.log(this.products);
                found = true;
              }
            }
          });
      })
    })
  }

}
