import {Component, OnInit} from '@angular/core';
import {PatientsService} from "../../services/patients.service";
import {mergeMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientDetails} from "../../models/PatientDetails";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
})
export class PatientDetailsComponent implements OnInit {

  patient?: PatientDetails;
  age = 0;
  protected readonly Date = Date;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientsService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(mergeMap(params => {
      return this.patientService.getPatient(params.get('id') ?? '')
    })).subscribe(res => {
      if (res.body === null) {
        this.router.navigateByUrl('/notFound');
      } else {
        this.patient = res.body;
        let birthDate = new Date(Date.parse(this.patient.birthDate));
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() <= birthDate.getDate()))
          age--;
        this.age = age;
      }
    });
  }

  protected readonly environment = environment;

  selectedConsultationIndex = 0;
  isRightEyeSelected = false;


  onConsultationChanged(index: number) {
    if (this.selectedConsultationIndex != index) {
      this.selectedConsultationIndex = index;
      this.isRightEyeSelected = false;
    }
  }

  onLeftEyeSelected() {
    this.isRightEyeSelected = false;

  }

  onRightEyeSelected() {
    this.isRightEyeSelected = true;
  }
}
