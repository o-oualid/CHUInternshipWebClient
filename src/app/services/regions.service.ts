import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Region} from "../models/Region";

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  constructor(private httpClient: HttpClient) {
  }

  gerRegions() {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.httpClient.get<Region[]>(environment.apiEndPoint + '/regions', {headers});
  }
}
