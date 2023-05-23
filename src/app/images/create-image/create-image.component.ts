import {Component} from '@angular/core';
import {ImagesService} from "../../services/images.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent {


  constructor(private imagesService: ImagesService, private formBuilder: FormBuilder) {
  }

  form = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });
}
