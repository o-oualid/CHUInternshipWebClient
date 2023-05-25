import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap} from "rxjs";
import {ImagesService} from "../../services/images.service";
import {environment} from "../../../environments/environment";
import {ImageDetails} from "../../models/ImageDetails";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,
              private imagesService: ImagesService,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  image: ImageDetails = {} as ImageDetails;

  submit() {

  }

  delete() {

  }

  ngOnInit() {


    this.route.paramMap.pipe(mergeMap(params => {
      this.image.id = params.get('id') ?? '';
      return this.imagesService.getImageDetails(this.image.id)
    })).subscribe((res) => {
        if (res.status !== 200 || res.body === null) {
          this.router.navigateByUrl('/notFound');
        } else {
          this.image = res.body;
        }
      }
    );
  }


  protected readonly environment = environment;
}
