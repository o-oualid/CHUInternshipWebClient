import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {ListPatientsComponent} from './list-patients/list-patients.component';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ImagesModule} from "../images/images.module";
import {KonvaModule} from "ng2-konva";


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
    ImagesModule
  ]
})
export class PatientsModule {
}
