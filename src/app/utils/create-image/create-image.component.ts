import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  leftEye: File = {} as File;
  rightEye: File = {} as File;

  form = this.formBuilder.group({
    leftEyeImage: ['', Validators.required],
    leftEyeClassification: ['', Validators.required],
    leftEyeNotes: '',
    rightEyeImage: ['', Validators.required],
    rightEyeClassification: ['', Validators.required],
    rightEyeNotes: '',
  });

  submit() {

  }

  public onLeftEyeImagesChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      this.leftEye = event.target.files[0];
    }
  }

  public onRightEyeImagesChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      this.rightEye = event.target.files[0];
    }
  }
}
