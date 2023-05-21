import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SetupDetails} from "./dto/setupDetails";
import {AuthDetails} from "../models/AuthDetails";
import {ServerState} from "../models/ServerState";
import {map} from "rxjs";
import {authStorageService} from "../services/auth-storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private http: HttpClient, private authStorage: authStorageService, private router: Router) {
  }

  getServerState() {
    return this.http.get<ServerState>(environment.apiEndPoint + "/server/state")
  }

  setupServer(setupDetails: SetupDetails) {
    return this.http.post<AuthDetails>(environment.apiEndPoint + "/server/setup", setupDetails).subscribe(res => {
      this.authStorage.store(res);
      this.router.navigateByUrl("/");
    });
  }

}
