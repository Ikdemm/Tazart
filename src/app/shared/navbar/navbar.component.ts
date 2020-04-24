import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data;

  //lang = "fr";
  
  constructor(private productsService: ProductsService,
    private translate: TranslateService) { 
      this.translate.setDefaultLang('fr');
    }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.productsService.getData().subscribe(data => {
      this.data = data;
    })
  }

}
