import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { CAROUSEL_OPTIONS, NO_SLIDE_OPTIONS} from 'src/app/shared/constants';
import { ActivatedRoute, Params } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  data;
  subscription;
  lang;
  product;

  slideOptionsHeader = NO_SLIDE_OPTIONS;
  carouselOptions = CAROUSEL_OPTIONS;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private languageService: LanguageService,
    private productsService: ProductsService) { 
      this.subscription = this.languageService.getLanguage()
    .subscribe(lang => this.lang = lang);
    this.useLanguage(this.lang);
  }

  ngOnInit() {
    this.spinner.show();
    this.productsService.getAllData().subscribe(data => {
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

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
