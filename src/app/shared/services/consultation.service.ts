import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Consultation} from "../models/Consultation";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) {
  }

  createConsultation(consultation: Consultation) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.post<Consultation>(environment.apiEndPoint + "/consultations", consultation, {
      headers: headers,
      observe: 'response'
    });
  }
}
