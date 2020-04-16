import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { pipe, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalDetailsResolverService implements Resolve<any> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) {
      this.productsService.getData().pipe(
        catchError((error) => {
          return empty();
        })
      )
  }

  constructor(private productsService: ProductsService) { }
}
