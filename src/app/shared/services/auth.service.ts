import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthDetails} from "../models/AuthDetails";
import {environment} from "../../../environments/environment";
import {LoginInfo} from "../models/LoginInfo";
import {authStorageService} from "./auth-storage.service";
import {Router} from "@angular/router";
import {UserJoin} from "../models/UserJoin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authStorage: authStorageService, private http: HttpClient, private router: Router) {
  }

  login(loginInfo: LoginInfo) {
    return this.http.post<AuthDetails>(environment.apiEndPoint + "/login", loginInfo, {observe: 'response'}).subscribe(res => {
        if (res.body !== null)
          this.authStorage.store(res.body);
        this.router.navigateByUrl("/")
      }
    );
  }

  join(userJoin: UserJoin) {
    return this.http.post<AuthDetails>(environment.apiEndPoint + "/join", userJoin, {observe: 'response'}).subscribe(res => {
        if (res.body !== null)
          this.authStorage.store(res.body);
        this.router.navigateByUrl("/")
      }
    );
  }
}
