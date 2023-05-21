import {Injectable} from '@angular/core';
import {AuthDetails} from "../models/AuthDetails";

@Injectable({
  providedIn: 'root'
})
export class authStorageService {

  constructor() {
  }

  store(authDetails: AuthDetails) {
    localStorage.setItem("token", authDetails.token);
    localStorage.setItem("ttl", authDetails.ttl.valueOf().toString())
    localStorage.setItem("userName", authDetails.user.firstName + " " + authDetails.user.lastName)
    localStorage.setItem("email", authDetails.user.email);
  }

  clearAuth() {
    localStorage.clear();
  }
}
