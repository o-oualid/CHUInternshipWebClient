import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateConsultationComponent} from "./create-consultation/create-consultation.component";

const routes: Routes = [
  {path: 'create/:id', component: CreateConsultationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule {
}
