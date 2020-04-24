import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS, SLIDE_OPTIONS } from '../../../shared/constants';
import { ProductsService } from 'src/app/core/services/products.service';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  segmentName;
  segments;
  segment;
  products = [];
  data;
  frenchData;
  subscription;
  lang;

  slideOptionsProduct = SLIDE_OPTIONS;
  slideOptionsHeader = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private productsService: ProductsService) { 
      this.subscription = this.languageService.getLanguage()
    .subscribe(lang => this.lang = lang);
  }


  fetchProducts() {
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {

    this.languageService.getLanguage().subscribe(lang => {this.lang = lang; console.log(this.lang)});

    this.productsService.getAllData().subscribe(data => {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
