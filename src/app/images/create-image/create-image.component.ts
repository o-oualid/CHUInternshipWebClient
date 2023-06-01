import {Component, Input} from '@angular/core';
import {ImagesService} from "../../services/images.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ImageCreation} from "../../models/ImageCreation";
import {Patient} from "../../models/Patient";

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent {

  @Input() patient: Patient | null = null;

  constructor(private imagesService: ImagesService, private formBuilder: FormBuilder) {
  }

  file: File = {} as File;
  image: ImageCreation = {} as ImageCreation;
  form = this.formBuilder.group({
    image: ['', Validators.compose([Validators.required])],
    rightEye: ['', Validators.compose([Validators.required])],
    classification: ['', Validators.compose([Validators.required])],
    dateTaken: [this.image.dateTaken, Validators.compose([Validators.required])],
    notes: [''],
  });


  submit() {
    if (this.form.invalid) return;
    this.form.disable()
    this.image.rightEye = this.form.get('rightEye')?.getRawValue();
    this.image.classification = this.form.get('classification')?.getRawValue();
    this.image.dateTaken = this.form.get('dateTaken')?.getRawValue();
    this.image.notes = this.form.get('notes')?.getRawValue();
    if (this.patient !== null)
      this.image.patientId = this.patient.id;
    this.imagesService.createImage(this.image, this.file).subscribe(res => {
        this.form.enable()
      }
    );
  }

  public onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }
}
