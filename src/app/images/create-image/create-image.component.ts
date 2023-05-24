import {Component} from '@angular/core';
import {ImagesService} from "../../services/images.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ImageCreation} from "../../models/imageCreation";

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent {


  constructor(private imagesService: ImagesService, private formBuilder: FormBuilder) {
  }
  file:File={} as File;
  image: ImageCreation = {} as ImageCreation;
  form = this.formBuilder.group({
    image: ['', Validators.compose([Validators.required])],
    rightEye: ['', Validators.compose([Validators.required])],
    classification: ['', Validators.compose([Validators.required])],
    dateTaken: [this.image.dateTaken, Validators.compose([Validators.required])],
    notes: ['', Validators.compose([Validators.required])],
  });


  submit() {
    if (this.form.invalid) return;
    this.image.rightEye = this.form.get('rightEye')?.getRawValue();
    this.image.classificationId = this.form.get('classification')?.getRawValue();
    this.image.dateTaken = this.form.get('dateTaken')?.getRawValue();
    this.image.notes = this.form.get('notes')?.getRawValue();
    this.imagesService.createImage(this.image,this.file).subscribe(res=>console.log(res));
  }

  public onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }
}
