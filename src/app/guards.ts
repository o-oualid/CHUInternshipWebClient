import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {SetupService} from "./setup/setup.service";
import {map, Observable} from "rxjs";


export const isServerSetedup: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  return inject(SetupService).getServerState().pipe(map(res => res.isSetup))
}

export const isLoggedIn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return localStorage.getItem("token") != null &&
    localStorage.getItem("ttl") != null &&
    parseInt(localStorage.getItem("ttl") || "0") < Date.now().valueOf();
}
