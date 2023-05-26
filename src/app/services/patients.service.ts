import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Patient} from "../models/Patient";
import {Page} from "../utils/Page";
import {PatientDetails} from "../models/PatientDetails";

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
    return this.http.post<Patient>(environment.apiEndPoint + '/patients', patient, {headers: headers, observe: 'response'});
  }

  getPatients(page = 0, sort = "id", asc: boolean = true, size = 20) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Page<Patient>>(`${environment.apiEndPoint}/patients?size=${size}&page=${page}&sort=${sort},${asc ? 'asc' : 'desc'}`, {headers: headers, observe: 'response'});
  }

  getPatient(id: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<PatientDetails>(`${environment.apiEndPoint}/patients/${id}`,{headers:headers, observe:'response'})
  }

  update(patient: Patient) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token"),};
    return this.http.put<Patient>(environment.apiEndPoint + '/patients', patient, {headers:headers, observe:'response'});
  }
}
