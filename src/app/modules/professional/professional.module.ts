import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalRoutingModule } from './professional-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [ProfessionalDetailsComponent, ProfessionalListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    ProfessionalRoutingModule,
    NgxSpinnerModule
  ]
})
export class ProfessionalModule { }
