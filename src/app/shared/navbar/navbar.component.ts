import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  data;
  subscription;
  lang;
  frenchData;
  
  constructor(
    private productsService: ProductsService,
    private translate: TranslateService,
    private languageService: LanguageService
    ) { 
      this.subscription = this.languageService.getLanguage()
    .subscribe(lang => this.lang = lang);
    this.useLanguage(this.lang);
    }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.productsService.getData().subscribe(data => {
      this.data = data;
    })
    this.productsService.getFrenchData().subscribe(data => {
      this.frenchData = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
