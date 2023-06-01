import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SetupDetails} from "./dto/setupDetails";
import {AuthDetails} from "../models/AuthDetails";
import {ServerState} from "../models/ServerState";
import {authStorageService} from "../services/auth-storage.service";
import {Router} from "@angular/router";
import {map, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private http: HttpClient, private authStorage: authStorageService, private router: Router) {
  }

  private isSetup: boolean | null = null;

  getServerState() {
    if (this.isSetup !== null)
      return of(new ServerState(this.isSetup));
    return this.http.get<ServerState>(environment.apiEndPoint + "/server/state").pipe(map(state => {
      this.isSetup = state.setup;
      return state;
    }));
  }

  setupServer(setupDetails: SetupDetails) {
    return this.http.post<AuthDetails>(environment.apiEndPoint + "/server/setup", setupDetails, {observe: 'response'})
      .subscribe(res => {
        if (res.status === 200 && res.body != null) {
          this.authStorage.store(res.body);
          this.isSetup = true;
          this.router.navigateByUrl("/");
        }
      });
  }

}
