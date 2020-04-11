import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './modules/products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { ResellersComponent } from './modules/resellers/resellers.component';
import { NewsComponent } from './modules/news/news.component';
import { ProfessionalComponent } from './modules/professional/professional.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ResellersComponent,
    NewsComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
