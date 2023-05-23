import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PatientsService} from "../../services/patients.service";
import {DiabetesTypes} from "../../models/DiabetesTypes";
import {Region} from "../../models/Region";
import {DiabetesTypesService} from "../../services/diabetes-types.service";
import {RegionsService} from "../../services/regions.service";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  form = this.formBuilder.group({
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
  public diabetesTypes: DiabetesTypes[] = [];
  regions: Region[] = [];

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientsService,
              private regionService: RegionsService,
              private diabetesTypeService: DiabetesTypesService

  ) {
  }

  submit() {
    if (this.form.invalid) return;

    this.patientService.create({
      id: '',
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
    }).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.regionService.gerRegions().subscribe(res => this.regions = res);
    this.diabetesTypeService.getDiabetesTypes().subscribe(res => this.diabetesTypes = res)
  }
}
