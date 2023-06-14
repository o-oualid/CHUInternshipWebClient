import {Patient} from "./Patient";
import {User} from "./User";

export class ImageDetails {
  public id: string;
  public picturePath: string;
  public classification: string;
  public notes: string;

  constructor(id: string, picturePath: string, classification: string, notes: string) {
    this.id = id;
    this.picturePath = picturePath;
    this.classification = classification;
    this.notes = notes;

  }
}
