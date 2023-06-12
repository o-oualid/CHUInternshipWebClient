import {ImageCreation} from "./ImageCreation";
import {ImageDetails} from "./ImageDetails";

export class Consultation {

  id?: string;
  patientId: string;
  leftEye?: ImageDetails;
  rightEye?: ImageDetails;
  date: String;
  notes: String;

  constructor(id: string, patientId: string, leftEye: ImageDetails, rightEye: ImageDetails, date: String, notes: String) {
    this.id = id;
    this.patientId = patientId;
    this.leftEye = leftEye;
    this.rightEye = rightEye;
    this.date = date;
    this.notes = notes;
  }
}
