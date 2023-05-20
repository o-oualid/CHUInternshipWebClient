import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthDetails} from "../models/AuthDetails";
import {environment} from "../../environments/environment";
import {LoginInfo} from "../models/LoginInfo";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(loginInfo: LoginInfo) {
    return this.http.post<AuthDetails>(environment.apiEndPoint + "/login", loginInfo);
  }
}
