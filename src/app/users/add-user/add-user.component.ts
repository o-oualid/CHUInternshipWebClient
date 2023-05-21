import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  form = this.formBuilder.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    role: ['', Validators.compose([Validators.required])],
  });

  constructor(private formBuilder: FormBuilder, private userService: UsersService) {
  }

  submit() {
    if (this.form.invalid) return;

    this.userService.invite({
      firstName: this.form.get('firstName')?.getRawValue(),
      lastName: this.form.get('firstName')?.getRawValue(),
      email: this.form.get('email')?.getRawValue(),
      role: this.form.get('role')?.getRawValue(),
    }).subscribe(res => console.log(res));
  }
}
