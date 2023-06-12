import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {PatientsService} from "../../services/patients.service";
import {mergeMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientDetails} from "../../models/PatientDetails";
import Konva from "konva";
import {WhiteBoard} from "./whiteboard/whiteboard";
import {WINDOW} from '@ng-web-apis/common';
import {Filter} from "konva/lib/Node";
import {Grayscale} from "konva/lib/filters/Grayscale";
import {ImagesService} from "../../services/images.service";
import Image = Konva.Image;
import Filters = Konva.Filters;

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, AfterViewInit {

  whiteBoard!: WhiteBoard;
  patient?: PatientDetails;
  private image: Image = {} as Image;
  age = 0

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


  constructor(@Inject(WINDOW) private windowRef: Window,
              private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientsService,
              private imagesService: ImagesService
  ) {
  }

  ngOnInit(): void {

  }

  onCanvasLoaded() {
    console.log("loading image")
    const canvas = this.windowRef.document.getElementById('canvas');
    const rect = canvas!.getBoundingClientRect();

    const width = rect.width;
    const height = width;

    this.whiteBoard = new WhiteBoard();
    this.whiteBoard.initStage(width, height, 'canvas');
    this.whiteBoard.initMainLayer();

    Konva.Image.fromURL('/assets/test.jpeg', (image) => {
      const scale = Math.min(width / image.getWidth(), height / image.getHeight());
      image.setAttrs({x: 0, y: 0, scale: {x: scale, y: scale}});
      image.cache();
      image.filters([]);
      this.image = image;
      this.whiteBoard.mainLayer.add(image);
    });
  }

  ngAfterViewInit() {

    this.route.paramMap.pipe(mergeMap(params => {
      return this.patientService.getPatient(params.get('id') ?? '')
    })).subscribe(res => {
      if (res.body === null) {
        this.router.navigateByUrl('/notFound');
      } else {
        this.patient = res.body;
        let birthDate = new Date(Date.parse(this.patient.birthDate));
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() <= birthDate.getDate()))
          age--;
        this.age = age;
      }
    });
  }

  toggleFilter(event: Event, filter: Filter) {
    if (this.image.filters().find(x => x === filter) !== undefined) {
      this.image.filters([])
    } else {
      this.image.filters([filter]);
    }
  }

  protected readonly Filters = Filters;

  protected readonly Date = Date;
  protected readonly Math = Math;
  protected readonly Grayscale = Grayscale;
  form: any;
}
