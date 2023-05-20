import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent {
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  form = this.formBuilder.group({
    serverName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    birthDay: [Date.now, Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    passwordConfirmation: ['', Validators.compose([Validators.required])],
  });

  submit() {
    if (this.form.invalid) return;
    this.authService.login({
      userName: this.form.get('userName')?.getRawValue(),
      password: this.form.get('password')?.getRawValue(),
    }).subscribe(resp => console.log(resp));
  }
}
