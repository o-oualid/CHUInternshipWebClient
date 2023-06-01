import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ConsultationService} from "../../services/consultation.service";
import {formatDate} from "@angular/common";
import {mergeMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientsService} from "../../services/patients.service";

@Component({
  selector: 'app-create-consultation',
  templateUrl: './create-consultation.component.html',
  styleUrls: ['./create-consultation.component.css']
})
export class CreateConsultationComponent implements OnInit {

  date = new Date();
  patientId: string = '';
  form = this.formBuilder.group({
    patient: ['', Validators.compose([Validators.required])],
    notes: [''],
    consultationDate: [formatDate(this.date, "yyyy-MM-dd", 'en-US'), Validators.compose([Validators.required])],
  });

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private consultationService: ConsultationService,
              private patientService: PatientsService) {

  }

  submit() {
    if (this.form.invalid) return;

    this.consultationService.createConsultation({
      patientId: this.patientId,
      date: this.form.get('consultationDate')?.getRawValue(),
      notes: this.form.get('notes')?.getRawValue()
    }).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.form.get('patient')?.disable();
    this.route.paramMap.pipe(mergeMap(params => {
      this.patientId = params.get('id') ?? '';
      return this.patientService.getPatient(this.patientId)
    })).subscribe(res => {
      if (res.body === null) {
        this.router.navigateByUrl('/notFound');
      } else {
        this.patientId = res.body.id;
        this.form.get('patient')?.patchValue(res.body.firstName + ' ' + res.body.lastName)
      }
    });
  }
}
