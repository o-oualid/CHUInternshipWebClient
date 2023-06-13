import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupComponent} from "./popup/popup.component";
import { ImageCanvasComponent } from './image-canvas/image-canvas.component';
import {AuthenticatePipe} from "./authenticate.pipe";

@NgModule({
  declarations: [PopupComponent, ImageCanvasComponent, AuthenticatePipe],
  imports: [
    CommonModule,
  ],
  exports: [PopupComponent, ImageCanvasComponent, AuthenticatePipe]
})
export class UtilsModule {
}
