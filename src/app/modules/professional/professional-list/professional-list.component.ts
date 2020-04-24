import { Component, OnInit } from '@angular/core';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS } from 'src/app/shared/constants';
import { ProductsService } from 'src/app/core/services/products.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css']
})

export class ProfessionalListComponent implements OnInit {

  products = [];
  frenchProducts = [];
  
  data;
  frenchData;

  lang;
  subscription;

  slideOptions = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(private productsService: ProductsService,
    private languageService: LanguageService,
    private translate: TranslateService) {
      this.subscription = this.languageService.getLanguage()
      .subscribe(lang => this.lang = lang);
      this.useLanguage(this.lang);
    }

  ngOnInit() {
    this.productsService.getData().subscribe( data => {
      this.data = data;
      this.getProducts();
    })
    this.productsService.getFrenchData().subscribe( data => {
      this.frenchData = data;
      this.getFrenchProducts();
    })
  }

  getProducts() {
    this.data.forEach(category => {
      category.elements.forEach(element => {
        element.products.forEach(product => {
          if (product.technicalSheet) {
            this.products.push(product);
          }
        });
      });        
    });
  }

  getFrenchProducts() {
    this.frenchData.forEach(category => {
      category.elements.forEach(element => {
        element.products.forEach(product => {
          if (product.technicalSheet) {
            this.frenchProducts.push(product);
          }
        });
      });        
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

