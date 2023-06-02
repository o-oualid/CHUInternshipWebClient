import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DiabetesTypes} from "../models/DiabetesTypes";
import {map, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiabetesTypesService {
  constructor(private httpClient: HttpClient) {
  }

  private diabetesTypes: DiabetesTypes[] = [];

  getDiabetesTypes() {
    if (this.diabetesTypes.length > 0) return of(this.diabetesTypes);
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.httpClient.get<DiabetesTypes[]>(environment.apiEndPoint + '/diabetes-types', {headers: headers})
      .pipe(map((diabetesTypes: DiabetesTypes[]) => {
        this.diabetesTypes = diabetesTypes;
        return diabetesTypes;
      }));
  }

  addDiabetesType(diabetesType: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    this.httpClient.post<DiabetesTypes>(environment.apiEndPoint + '/diabetes-types', {value: diabetesType}, {
      headers: headers,
      observe: 'response'
    }).subscribe(res => {
      if (res.ok && res.body) {
        this.diabetesTypes.push(res.body);
        console.log("diabetes type added: "+res.body.name)
      }
    });
  }
}
