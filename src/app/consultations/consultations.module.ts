import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsultationsModule { }
