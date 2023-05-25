import {Patient} from "./Patient";
import {User} from "./User";

export class ImageDetails {
  public id: string;
  public picturePath: string;
  public classification: string;
  public notes: string;
  public patient: Patient | null;
  public user: User | null;
  public rightEye: boolean;
  public dateTaken: string;

  constructor(id: string, picturePath: string, classification: string, notes: string, patient: Patient | null, user: User | null, rightEye: boolean, dateTaken: string) {
    this.id = id;
    this.picturePath = picturePath;
    this.classification = classification;
    this.notes = notes;
    this.patient = patient;
    this.user = user;
    this.rightEye = rightEye;
    this.dateTaken = dateTaken;
  }
}
