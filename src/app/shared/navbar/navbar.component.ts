import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getData().subscribe(data => {
      this.data = data;
    })
  }

}
