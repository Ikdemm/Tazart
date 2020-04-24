import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS} from '../../../shared/constants';
import { ProductsService } from 'src/app/core/services/products.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit, OnDestroy {

  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  products = [];
  frenchProducts = [];
  data;
  frenchData;
  lang: string;
  subscription;

  constructor(private productService: ProductsService, private languageService: LanguageService) {
    this.subscription = this.languageService.getLanguage()
    .subscribe(lang => this.lang = lang); 
  }

  ngOnInit() {
    this.productService.getData().subscribe( data => {
      this.data = data;
      this.getProducts();
    })
    this.productService.getFrenchData().subscribe( data => {
      this.frenchData = data;
      this.getFrenchProducts();
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

  getFrenchProducts() {
    this.frenchData.forEach(category => {
      category.elements.forEach(element => {
        element.products.forEach(product => {
          this.frenchProducts.push(product);
        });
      });        
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
