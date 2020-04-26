import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProductsService } from '../services/products.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<any>{

  constructor(private productService: ProductsService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productService.getAllData();
  }
}