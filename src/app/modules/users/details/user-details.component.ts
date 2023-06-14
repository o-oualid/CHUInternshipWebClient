import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../../../shared/models/User";
import {UsersService} from "../../../shared/services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute,) {
  }

  user: User = {} as User;
  form = this.formBuilder.group({
    firstName: [{
      value: this.user.firstName,
      disabled: true
    }, Validators.compose([Validators.required, Validators.minLength(2)])],
    lastName: [{
      value: this.user.lastName,
      disabled: true
    }, Validators.compose([Validators.required, Validators.minLength(2)])],
    email: [{
      value: this.user.email,
      disabled: true
    }, Validators.compose([Validators.required, Validators.email])],
    role: [{
      value: this.user.role,
      disabled: true
    }, Validators.compose([Validators.required])],
    joinedAt: [{
      value: this.user.joinedAt,
      disabled: true
    }, Validators.compose([Validators.required])],
    active: [{
      value: this.user.active,
      disabled: true
    }, Validators.compose([Validators.required])],
  });

  submit() {
    if (this.form.invalid) return;
  }

  delete() {

  }

  ngOnInit() {
    this.route.paramMap.pipe(mergeMap(params => {
      this.user.id = params.get('id') ?? '';
      return this.usersService.getUser(this.user.id)
    })).subscribe((res) => {
        if (res.status !== 200 || res.body === null) {
          this.router.navigateByUrl('/notFound');
        } else {
          this.user = res.body;
          this.form.controls['firstName'].patchValue(this.user.firstName);
          this.form.controls['lastName'].patchValue(this.user.lastName);
          this.form.controls['email'].patchValue(this.user.email);
          this.form.controls['role'].patchValue(this.user.role);
          this.form.controls['joinedAt'].patchValue(this.user.joinedAt);
          this.form.controls['active'].patchValue(this.user.active);
        }
      }
    );
  }
}
