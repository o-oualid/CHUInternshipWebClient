import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ListImagesComponent } from './list-images/list-images.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticatePipe} from "../utils/authenticate.pipe";


@NgModule({
    declarations: [
        ListImagesComponent,
        CreateImageComponent,
        ImageDetailsComponent,
        AuthenticatePipe
    ],
  exports: [
    ImageDetailsComponent,
    CreateImageComponent
  ],
    imports: [
        CommonModule,
        ImagesRoutingModule,
        ReactiveFormsModule,
        NgOptimizedImage,
    ]
})
export class ImagesModule { }
