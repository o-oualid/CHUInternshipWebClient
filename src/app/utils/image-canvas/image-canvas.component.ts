import {AfterViewInit, Component, Inject, Input} from '@angular/core';
import {Grayscale} from "konva/lib/filters/Grayscale";
import {WhiteBoard} from "../whiteboard";
import Konva from "konva";
import {Filter} from "konva/lib/Node";
import {WINDOW} from "@ng-web-apis/common";
import Image = Konva.Image;
import Util = Konva.Util;

@Component({
  selector: 'app-image-canvas',
  templateUrl: './image-canvas.component.html',
  styleUrls: ['./image-canvas.component.css']
})
export class ImageCanvasComponent implements AfterViewInit {

  protected readonly Grayscale = Grayscale;
  private width: number = 100;
  private height: number = 100;

  constructor(@Inject(WINDOW) private windowRef: Window) {

  }


  whiteBoard!: WhiteBoard;
  private image: Image = {} as Image;

  @Input() set src(value: string | undefined) {
    if (value)
      this.ImageFromURL(value, (image) => {
        const scale = Math.min(this.width / image.getWidth(), this.height / image.getHeight());
        image.setAttrs({x: 0, y: 0, scale: {x: scale, y: scale}});
        image.cache();
        image.filters([]);
        this.image = image;
        this.whiteBoard.mainLayer.add(image);
      });
  }


  ngAfterViewInit() {
    const canvas = this.windowRef.document.getElementById('canvas');
    const rect = canvas!.getBoundingClientRect();

    this.width = rect.width;
    this.height = this.width;

    this.whiteBoard = new WhiteBoard();
    this.whiteBoard.initStage(this.width, this.height, 'canvas');
    this.whiteBoard.initMainLayer();

  }

  RedFilter: Filter = (imageData: ImageData) => {
    for (let x = 0; x < imageData.data.length; x += 4) {
      imageData.data[x + 1] = 0;
      imageData.data[x + 2] = 0;
    }
  }
  GreenFilter: Filter = (imageData: ImageData) => {
    for (let x = 0; x < imageData.data.length; x += 4) {
      imageData.data[x] = 0;
      imageData.data[x + 2] = 0;
    }
  }
  BlueFilter: Filter = (imageData: ImageData) => {
    for (let x = 0; x < imageData.data.length; x += 4) {
      imageData.data[x] = 0;
      imageData.data[x + 1] = 0;
    }
  }

  toggleFilter(event: Event, filter: Filter) {
    if (this.image.filters().find(x => x === filter) !== undefined) {
      this.image.filters([])
    } else {
      this.image.filters([filter]);
    }
  }

  ImageFromURL(
    url: string,
    callback: (img: Image) => void,
    onError: OnErrorEventHandler = null
  ) {
    const img = Util.createImageElement();
    img.onload = function () {
      const image = new Image({
        image: img,
      });
      callback(image);
    };
    img.onerror = onError;
    img.crossOrigin = 'Anonymous';
    img.src = url;
    ;
  }

}
