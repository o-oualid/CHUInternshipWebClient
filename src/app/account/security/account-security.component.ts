import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-security',
  templateUrl: './account-security.component.html',
})
export class AccountSecurityComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  form = this.formBuilder.group({
    currentPassword: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    newPasswordConfirmation: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  submit() {
    if (this.form.invalid) return;
  }

}
