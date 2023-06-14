export class Quiz {
  classification: string;
  image: string;
  notes:string;

  constructor(classification: string, image: string,notes:string) {
    this.classification = classification;
    this.image = image;
    this.notes=notes;
  }
}
