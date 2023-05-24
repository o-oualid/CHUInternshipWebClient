
export class Image {
  id:string;
  picturePath:string;
  classificationId:number;
  notes:string;
  patientId:string;
  userId:string;
  rightEye:boolean;
  dateTaken:string;


  constructor(id: string, picturePath: string, classificationId: number, notes: string, patientId: string, userId: string, rightEye: boolean, dateTaken: string) {
    this.id = id;
    this.picturePath = picturePath;
    this.classificationId = classificationId;
    this.notes = notes;
    this.patientId = patientId;
    this.userId = userId;
    this.rightEye = rightEye;
    this.dateTaken = dateTaken;
  }
}
