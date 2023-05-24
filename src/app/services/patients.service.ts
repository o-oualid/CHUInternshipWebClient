import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Patient} from "../models/Patient";
import {Page} from "../utils/Page";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) {
  }

  create(patient: Patient) {
    const headers: { Authorization: string } = {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    };
    return this.http.post<Patient>(environment.apiEndPoint + '/patients', patient, {headers});
  }

  getPatients(page = 0, sort = "id", asc: boolean = true, size = 20) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Page<Patient>>(`${environment.apiEndPoint}/patients?size=${size}&page=${page}&sort=${sort},${asc ? 'asc' : 'desc'}`, {headers});
  }

  getPatient(id: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Patient>(`${environment.apiEndPoint}/patients/${id}`,{headers})
  }
}
