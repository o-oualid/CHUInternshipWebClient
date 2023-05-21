import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SetupService} from "../setup.service";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent {
  constructor(private formBuilder: FormBuilder, private setupService: SetupService) {
  }

  form = this.formBuilder.group({
    serverName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    confirmEmail: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    confirmPassword: ['', Validators.compose([Validators.required])],
  });

  submit() {
    if (this.form.invalid) return;
    this.setupService.setupServer({
      serverName: this.form.get('serverName')?.getRawValue(),
      user: {
        firstName: this.form.get('firstName')?.getRawValue(),
        lastName: this.form.get('lastName')?.getRawValue(),
        email: this.form.get('email')?.getRawValue(),
        password: this.form.get('password')?.getRawValue(),
      }

    });
  }
}
