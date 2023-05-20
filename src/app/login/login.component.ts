import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder,private authService:AuthService) {
  }

  form = this.formBuilder.group({
    userName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  submit() {
    if(this.form.invalid) return;
    this.authService.login({
      userName: this.form.get('userName')?.getRawValue(),
      password: this.form.get('password')?.getRawValue(),
    }).subscribe(resp=> console.log(resp));  }
}
