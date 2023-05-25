import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DiabetesTypes} from "../models/DiabetesTypes";

@Injectable({
  providedIn: 'root'
})
export class DiabetesTypesService {
  constructor(private httpClient: HttpClient) {
  }

  getDiabetesTypes() {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.httpClient.get<DiabetesTypes[]>(environment.apiEndPoint + '/diabetes-types', {headers: headers});
  }
}
