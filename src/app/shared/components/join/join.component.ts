import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-invite',
  templateUrl: './join.component.html',
})
export class JoinComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder,
              private usersService: UsersService, private authService: AuthService) {
  }

  code: string = '';

  user: User = {} as User;

  form = this.formBuilder.group({
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  ngOnInit() {
    this.route.paramMap.pipe(mergeMap(params => {
      this.code = params.get('code') ?? '';
      return this.usersService.getInvitedUser(this.code)
    })).subscribe(
      res => {
        if (res.status === 200 && res.body != null)
          this.user = res.body
        else
          this.router.navigateByUrl('/notFound')
      }
    );
  }

  submit() {
    if (this.form.invalid) return;
    this.authService.join({
      inviteCode: this.code,
      password: this.form.get('password')?.getRawValue()
    });
  }
}
