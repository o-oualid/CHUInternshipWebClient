import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-details',
  templateUrl: './account-details.component.html',
})
export class AccountDetailsComponent {
  constructor(private formBuilder: FormBuilder) {
  }

  protected readonly localStorage = localStorage;

  form = this.formBuilder.group({
    firstName: [{
      value: localStorage.getItem('firstName'),
      disabled: true
    }, Validators.compose([Validators.required, Validators.minLength(2)])],
    lastName: [{
      value: localStorage.getItem('lastName'),
      disabled: true
    }, Validators.compose([Validators.required, Validators.minLength(2)])],
    email: [{
      value: localStorage.getItem('email'),
      disabled: true
    }, Validators.compose([Validators.required, Validators.email])],
    role: [{
      value: localStorage.getItem('role'),
      disabled: true
    }, Validators.compose([Validators.required])],
  });

  submit() {
    if (this.form.invalid) return;
  }


}
