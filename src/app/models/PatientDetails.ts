import {Image} from "./Image";
import {Consultation} from "./Consultation";

export class PatientDetails {
  id: string;
  firstName: string;
  lastName: string;
  cin: string;
  birthDate: string;
  gender: string;
  phone: string;
  diabetesType: string;
  region: string;
  referable: boolean;
  discoveryDate: string;
  notes: string;
  public consultations: Consultation[];

  constructor(id: string, firstName: string, lastName: string, cin: string, birthDate: string, gender: string, phone: string, diabetesType: string, region: string, referable: boolean, discoveryDate: string, notes: string, consultations: Consultation[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cin = cin;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.diabetesType = diabetesType;
    this.region = region;
    this.referable = referable;
    this.discoveryDate = discoveryDate;
    this.notes = notes;
    this.consultations = consultations;
  }
}
