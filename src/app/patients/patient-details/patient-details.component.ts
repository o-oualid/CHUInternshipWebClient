import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DiabetesTypes} from "../../models/DiabetesTypes";
import {Region} from "../../models/Region";
import {PatientsService} from "../../services/patients.service";
import {RegionsService} from "../../services/regions.service";
import {DiabetesTypesService} from "../../services/diabetes-types.service";
import {mergeMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientDetails} from "../../models/PatientDetails";
import Konva from "konva";
import {WhiteBoard} from "./whiteboard/whiteboard";
import {WINDOW} from '@ng-web-apis/common';
import {Filter} from "konva/lib/Node";
import Image = Konva.Image;
import Filters = Konva.Filters;


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, AfterViewInit {

  whiteBoard!: WhiteBoard;

  patient: PatientDetails = {} as PatientDetails;
  public diabetesTypes: DiabetesTypes[] = [];
  regions: Region[] = [];
  private image: Image = {} as Image;

  LogData: Filter = (imageData: ImageData) => {
    console.log("loggin data");
   for (let x = 0; x < imageData.data.length; x++) {
      if (imageData.data[x] < 0 || imageData.data[x] > 255)
        console.log(imageData.data[x]);
    }
  }

  colorFilter = (imageData: ImageData, colorIndex: number) => {
    for (let x = colorIndex; x < imageData.data.length; x += 4) {
      imageData.data[x] = 0;
    }
  }

  RedFilter: Filter = (imageData: ImageData) => {
    this.colorFilter(imageData, 0)
  }
  GreenFilter: Filter = (imageData: ImageData) => {
    this.colorFilter(imageData, 1)
  }
  BlueFilter: Filter = (imageData: ImageData) => {
    this.colorFilter(imageData, 2)
  }


  constructor(@Inject(WINDOW) private windowRef: Window,
              private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientsService,
              private regionService: RegionsService,
              private diabetesTypeService: DiabetesTypesService) {
  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    const canvas = this.windowRef.document.getElementById('canvas');
    const rect = canvas!.getBoundingClientRect();

    const width = 400;
    const height = 400;
    this.whiteBoard = new WhiteBoard();
    this.whiteBoard.initStage(width, height, 'canvas');
    this.whiteBoard.initMainLayer();
    this.regionService.gerRegions().subscribe(res => this.regions = res);
    this.diabetesTypeService.getDiabetesTypes().subscribe(res => this.diabetesTypes = res);

    this.route.paramMap.pipe(mergeMap(params => {
      this.patient.id = params.get('id') ?? '';
      return this.patientService.getPatient(this.patient.id)
    })).subscribe(res => {
      if (res.body === null) {
        this.router.navigateByUrl('/notFound');

      } else {
        this.patient = res.body;
      }
    });


    Konva.Image.fromURL('/assets/test.jpeg', (image) => {
      image.setAttrs({x: 0, y: 0, scale: 1});
      image.cache();
      image.filters([Konva.Filters.Brighten, this.LogData]);
      this.image = image;
      this.whiteBoard.mainLayer.add(image);
    });
  }

  brightnessChanged(event: Event) {
    this.image.brightness(Number((event.target as HTMLInputElement).value));
  }

  grayScale(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.checked) {
      this.image.filters().push(Filters.Grayscale)
      this.image.filters(this.image.filters());
    } else {
      this.image.filters(this.image.filters().filter(filter => filter !== Filters.Grayscale));
    }
  }


  toggleFilter(event: Event, filter: Filter) {
    const element = event.target as HTMLInputElement;
    if (this.image.filters().find(x => x === filter) !== undefined) {
      this.image.filters(this.image.filters().filter(x => x !== filter));
    } else {
      this.image.filters().push(filter)
      this.image.filters(this.image.filters());
    }
  }

  protected readonly Filters = Filters;
}

