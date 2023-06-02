export class Answer {
  notes:string;
  classification: string;

  constructor(classification:string,notes:string){
    this.classification=classification;
    this.notes=notes;
  }
}
