export class ImageCreation {
  public classification: string;
  public notes: string;
  public patientId: string;
  public rightEye: boolean;
  dateTaken:string;


  constructor(classification: string, notes: string, patientId: string, rightEye: boolean, dateTaken: string) {
    this.classification = classification;
    this.notes = notes;
    this.patientId = patientId;
    this.rightEye = rightEye;
    this.dateTaken = dateTaken;
  }
}
