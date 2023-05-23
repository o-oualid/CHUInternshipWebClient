import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ListImagesComponent } from './list-images/list-images.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


@NgModule({
  declarations: [
    ListImagesComponent,
    CreateImageComponent,
    ImageDetailsComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
