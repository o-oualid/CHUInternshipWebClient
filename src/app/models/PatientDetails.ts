import {Image} from "./Image";

export class PatientDetails {
  id: string;
  firstName: string;
  lastName: string;
  cin: string;
  birthDate: string;
  gender: string;
  phone: string;
  diabetesTypeId: bigint;
  regionId: bigint;
  referable: boolean;
  discoveryDate: string;
  notes: string;
  images: Image[];

  constructor(id: string, firstName: string, lastName: string, cin: string, birthDate: string, gender: string, phone: string, diabetesTypeId: bigint, regionId: bigint, referable: boolean, discoveryDate: string, notes: string, images: Image[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cin = cin;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.diabetesTypeId = diabetesTypeId;
    this.regionId = regionId;
    this.referable = referable;
    this.discoveryDate = discoveryDate;
    this.notes = notes;
    this.images = images;
  }
}
