import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {inject} from "@angular/core";
import {SetupService} from "./setup/setup.service";
import {map, Observable} from "rxjs";


export const isServerSetup: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let router=inject(Router);
  return inject(SetupService).getServerState().pipe(map(res => res.setup ? true : router.parseUrl("/setup")))
}

export const isServerNotSetup: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let router=inject(Router);
  return inject(SetupService).getServerState().pipe(map(res =>  res.setup ? router.parseUrl("/") : true));
}

export const isLoggedIn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let router=inject(Router);
  if (localStorage.getItem("token") != null &&
    localStorage.getItem("ttl") != null &&
    parseInt(localStorage.getItem("ttl") || "0") < Date.now().valueOf()) return true;
  else return router.parseUrl("/login");
}

export const isNotLoggedIn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let router=inject(Router);
  if (localStorage.getItem("token") != null &&
    localStorage.getItem("ttl") != null &&
    parseInt(localStorage.getItem("ttl") || "0") < Date.now().valueOf()) return router.parseUrl("/");
  else return true;
}
