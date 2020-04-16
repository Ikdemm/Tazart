import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './modules/products/products.module';
import { ProfessionalModule } from './modules/professional/professional.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { ResellersComponent } from './modules/resellers/resellers.component';
import { NewsComponent } from './modules/news/news.component';
import { SharedModule } from './shared/shared.module';

import { NgxSpinnerModule } from "ngx-spinner";

import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ResellersComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    ProfessionalModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    OwlModule,
    MatTabsModule,
    NgxSpinnerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
