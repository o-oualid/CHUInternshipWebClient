import {ImageCreation} from "./ImageCreation";

export class Consultation {

  id?: string;
  patientId: string;
  leftEye?: ImageCreation;
  rightEye?: ImageCreation;
  date: String;
  notes: String;

  constructor(id: string, patientId: string, leftEye: ImageCreation, rightEye: ImageCreation, date: String, notes: String) {
    this.id = id;
    this.patientId = patientId;
    this.leftEye = leftEye;
    this.rightEye = rightEye;
    this.date = date;
    this.notes = notes;
  }
}
