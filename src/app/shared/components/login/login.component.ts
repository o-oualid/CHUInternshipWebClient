import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  form = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  submit() {
    if (this.form.invalid) return;
    this.authService.login({
      email: this.form.get('email')?.getRawValue(),
      password: this.form.get('password')?.getRawValue(),
    });
  }
}
