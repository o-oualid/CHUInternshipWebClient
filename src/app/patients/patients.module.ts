import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {ListPatientsComponent} from './list-patients/list-patients.component';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImagesModule} from "../images/images.module";


@NgModule({
  declarations: [
    ListPatientsComponent,
    CreatePatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    ImagesModule,
    FormsModule
  ]
})
export class PatientsModule {
}
