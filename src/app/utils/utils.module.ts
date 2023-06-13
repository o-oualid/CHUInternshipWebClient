import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupComponent} from "./popup/popup.component";
import {ImageCanvasComponent} from './image-canvas/image-canvas.component';
import {AuthenticatePipe} from "./authenticate.pipe";
import {CreateImageComponent} from './create-image/create-image.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [PopupComponent, ImageCanvasComponent, AuthenticatePipe, CreateImageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PopupComponent, ImageCanvasComponent, AuthenticatePipe, CreateImageComponent]
})
export class UtilsModule {
}
