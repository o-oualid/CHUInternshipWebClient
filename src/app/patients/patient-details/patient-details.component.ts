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
import Image = Konva.Image;

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


    Konva.Image.fromURL('/assets/test.jpg', (image) => {
      image.setAttrs({x: 0, y: 0, scaleX: 1, scale: 1});
      image.cache();
      image.filters([Konva.Filters.Brighten]);
      this.image = image;
      this.whiteBoard.mainLayer.add(image);
    });
  }

  brightnessChanged($event: Event) {
    if (event === undefined) return;
    this.image.brightness(Number((event.target as HTMLInputElement).value));
    console.log((event.target as HTMLInputElement).value);
  }

  grayScale($event: Event) {
    if (event === undefined) return;
    console.log((event.target as HTMLInputElement).value);
  }
}
