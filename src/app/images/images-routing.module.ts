import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListImagesComponent} from "./list-images/list-images.component";
import {ImageDetailsComponent} from "./image-details/image-details.component";
import {CreateImageComponent} from "./create-image/create-image.component";

const routes: Routes = [
  {path: '', component: ListImagesComponent},
  {path: '/create', component: CreateImageComponent},
  {path: ':id', component: ImageDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule {
}
