import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [ FooterComponent, NavbarComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    OwlModule
  ],
  exports: [ FooterComponent, NavbarComponent, TopbarComponent, OwlModule]
})
export class SharedModule { }
