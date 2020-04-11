import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { SharedModule } from '../../shared/shared.module';

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProducsRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class ProductsModule { }
