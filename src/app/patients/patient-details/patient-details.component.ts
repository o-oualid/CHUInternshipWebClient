import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DiabetesTypes} from "../../models/DiabetesTypes";
import {Region} from "../../models/Region";
import {PatientsService} from "../../services/patients.service";
import {RegionsService} from "../../services/regions.service";
import {DiabetesTypesService} from "../../services/diabetes-types.service";
import {mergeMap} from "rxjs";
import {Patient} from "../../models/Patient";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  form = this.formBuilder.group({
    id: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    cin: ['', Validators.compose([Validators.required])],
    birthDate: ['', Validators.compose([Validators.required])],
    gender: ['', Validators.compose([Validators.required])],
    phone: ['', Validators.compose([Validators.required])],
    diabetesType: ['', Validators.compose([Validators.required])],
    region: ['', Validators.compose([Validators.required])],
    referable: ['', Validators.compose([Validators.required])],
    discoveryDate: ['', Validators.compose([Validators.required])],
    notes: ['', Validators.compose([Validators.required])],
  });
  patient: Patient = {} as Patient;
  public diabetesTypes: DiabetesTypes[] = [];
  regions: Region[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientsService,
              private regionService: RegionsService,
              private diabetesTypeService: DiabetesTypesService
  ) {
  }

  submit() {
    if (this.form.invalid) return;

    /*this.patientService.create({
      id: -1.0,
      firstName: this.form.get('firstName')?.getRawValue(),
      lastName: this.form.get('lastName')?.getRawValue(),
      cin: this.form.get('cin')?.getRawValue(),
      birthDate: this.form.get('birthDate')?.getRawValue(),
      gender: this.form.get('gender')?.getRawValue(),
      phone: this.form.get('phone')?.getRawValue(),
      diabetesTypeId: this.form.get('diabetesType')?.getRawValue(),
      regionId: this.form.get('region')?.getRawValue(),
      referable: this.form.get('referable')?.getRawValue(),
      discoveryDate: this.form.get('discoveryDate')?.getRawValue(),
      notes: this.form.get('notes')?.getRawValue(),
    }).subscribe(res => console.log(res));*/
  }

  ngOnInit(): void {
    this.regionService.gerRegions().subscribe(res => this.regions = res);
    this.diabetesTypeService.getDiabetesTypes().subscribe(res => this.diabetesTypes = res);

    this.route.paramMap.pipe(mergeMap(params => {
      this.patient.id = params.get('id') ?? '';
      return this.patientService.getPatient(this.patient.id)
    })).subscribe(res => {
      this.patient = res;
        this.form.controls['id'].patchValue(this.patient.id);
        this.form.controls['firstName'].patchValue(this.patient.firstName);
        this.form.controls['lastName'].patchValue(this.patient.lastName);
        this.form.controls['cin'].patchValue(this.patient.cin);
        this.form.controls['birthDate'].patchValue(this.patient.birthDate);
        this.form.controls['gender'].patchValue(this.patient.gender);
        this.form.controls['phone'].patchValue(this.patient.phone);
        this.form.controls['diabetesType'].patchValue(this.patient.diabetesTypeId.toString());
        this.form.controls['region'].patchValue(this.patient.regionId.toString());
        this.form.controls['referable'].patchValue(this.patient.referable? 'TRUE':'FALSE');
        this.form.controls['discoveryDate'].patchValue(this.patient.discoveryDate);
        this.form.controls['notes'].patchValue(this.patient.notes);
    }, error => this.router.navigateByUrl('/notFound'));
  }
}
