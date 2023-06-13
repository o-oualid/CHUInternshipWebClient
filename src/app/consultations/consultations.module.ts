import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsultationsRoutingModule} from './consultations-routing.module';
import {CreateConsultationComponent} from './create-consultation/create-consultation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "../utils/utils.module";


@NgModule({
  declarations: [
    CreateConsultationComponent
  ],
    imports: [
        CommonModule,
        ConsultationsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        UtilsModule
    ]
})
export class ConsultationsModule { }
