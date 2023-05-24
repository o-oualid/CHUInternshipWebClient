import {Component, OnInit} from '@angular/core';
import {Page} from "../../utils/Page";
import {Image} from "../../models/Image";
import {ImagesService} from "../../services/images.service";
import {range} from "../../utils/Range";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit{

  page: Page<Image> = {} as Page<Image>;

  sortBy: string = 'id';
  asc: boolean = true;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.imagesService.getImages().subscribe(res => this.page = res)
  }

  protected readonly Math = Math;

  updatePage(pageNumber: number) {
    this.imagesService.getImages(pageNumber, this.sortBy, this.asc).subscribe(res => this.page = res)

  }

  protected readonly range = range;

  sort(column: string) {
    if (column == this.sortBy) this.asc = !this.asc;
    else this.asc = true;
    this.sortBy = column;
    this.imagesService.getImages(0, column, this.asc).subscribe(res => this.page = res)

  }

  protected readonly environment = environment;
}
