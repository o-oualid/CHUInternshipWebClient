export class ImageCreation {
  public classification: string;
  public notes: string;
  consultationId: number;
  leftEye: boolean;

  constructor(classification: string, notes: string, consultationId: number, leftEye: boolean) {
    this.classification = classification;
    this.notes = notes;
    this.consultationId = consultationId;
    this.leftEye = leftEye;
  }
}
