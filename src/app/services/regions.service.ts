import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Region} from "../models/Region";
import {map, of} from "rxjs";

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
}
