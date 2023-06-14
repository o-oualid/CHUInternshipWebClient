export class Patient {

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

  constructor(id: string, fistName: string, lastName: string, CIN: string, birthDate: string, gender: string, phone: string, diabetesTypeId: bigint, regionId: bigint, referable: boolean, discoveryDate: string, notes: string) {
    this.id = id;
    this.firstName = fistName;
    this.lastName = lastName;
    this.cin = CIN;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.diabetesTypeId = diabetesTypeId;
    this.regionId = regionId;
    this.referable = referable;
    this.discoveryDate = discoveryDate;
    this.notes = notes;
  }
}
