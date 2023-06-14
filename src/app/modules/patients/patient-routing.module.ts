import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPatientsComponent} from "./list-patients/list-patients.component";
import {CreatePatientComponent} from "./create-patient/create-patient.component";
import {PatientDetailsComponent} from "./patient-details/patient-details.component";

const routes: Routes = [
  {path: '', component: ListPatientsComponent, pathMatch: 'full'},
  {path: 'create', component: CreatePatientComponent, pathMatch: 'full'},
  {path: ':id', component: PatientDetailsComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule {
}
