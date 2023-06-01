import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Patient} from "../models/Patient";
import {Page} from "../utils/Page";
import {PatientDetails} from "../models/PatientDetails";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) {
  }

  create(patient: Patient) {
    const headers: { Authorization: string } = {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    };
    return this.http.post<Patient>(environment.apiEndPoint + '/patients', patient, {
      headers: headers,
      observe: 'response'
    });
  }

  getPatients(page = 0, sort = "id", asc: boolean = true, size = 20) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Page<Patient>>(`${environment.apiEndPoint}/patients?size=${size}&page=${page}&sort=${sort},${asc ? 'asc' : 'desc'}`, {
      headers: headers,
      observe: 'response'
    });
  }

  getPatientsWithAConsultationOnDate(date: Date, page = 0, sort = "id", asc: boolean = true, size = 20) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Page<Patient>>(`${environment.apiEndPoint}/patients/perConsultationDate/${formatDate(date, "yyyy-MM-dd", this.locale)}?size=${size}&page=${page}&sort=${sort},${asc ? 'asc' : 'desc'}`, {
      headers: headers,
      observe: 'response'
    });
  }

  getPatient(id: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<PatientDetails>(`${environment.apiEndPoint}/patients/${id}`, {
      headers: headers,
      observe: 'response'
    })
  }

  findPatientsByName(name: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Page<Patient>>(`${environment.apiEndPoint}/patients/search/${name}`, {
      headers: headers,
      observe: 'response'
    })
  }


  update(patient: Patient) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token"),};
    return this.http.put<Patient>(environment.apiEndPoint + '/patients', patient, {
      headers: headers,
      observe: 'response'
    });
  }
}
