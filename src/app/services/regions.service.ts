import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Region} from "../models/Region";
import {map, of} from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  constructor(private httpClient: HttpClient) {
  }

  private regions: Region[] = [];

  getRegions() {
    if (this.regions.length > 0) return of(this.regions);
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.httpClient.get<Region[]>(environment.apiEndPoint + '/regions', {headers})
      .pipe(map((regions: Region[]) => {
        this.regions = regions;
        return this.regions;
      }));
  }

  addRegion(region: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    this.httpClient.post<Region>(environment.apiEndPoint + '/regions', {value: region}, {
      headers: headers,
      observe: 'response'
    }).subscribe(res => {
      if (res.ok && res.body) {
        this.regions.push(res.body);
      }
    });
  }
}
