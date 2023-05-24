export class ImageCreation {
  public classificationId: number;
  public notes: string;
  public patientId: string;
  public rightEye: boolean;
  dateTaken:string;


  constructor(classificationId: number, notes: string, patientId: string, rightEye: boolean, dateTaken: string) {
    this.classificationId = classificationId;
    this.notes = notes;
    this.patientId = patientId;
    this.rightEye = rightEye;
    this.dateTaken = dateTaken;
  }
}
