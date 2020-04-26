import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductResolver } from '../../core/resolvers/product.resolver';


const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'products/:name', component: ProductDetailsComponent,
  resolve: {
    productResolver: ProductResolver
  } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
