import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalRoutingModule } from './professional-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

import { NgxSpinnerModule } from "ngx-spinner";

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [ProfessionalDetailsComponent, ProfessionalListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    ProfessionalRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ]
})
export class ProfessionalModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}