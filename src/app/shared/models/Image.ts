
export class Image {
  id:string;
  picturePath:string;
  classification:string;
  notes:string;
  patientId:string;
  userId:string;
  rightEye:boolean;
  dateTaken:string;


  constructor(id: string, picturePath: string, classification: string, notes: string, patientId: string, userId: string, rightEye: boolean, dateTaken: string) {
    this.id = id;
    this.picturePath = picturePath;
    this.classification = classification;
    this.notes = notes;
    this.patientId = patientId;
    this.userId = userId;
    this.rightEye = rightEye;
    this.dateTaken = dateTaken;
  }
}
