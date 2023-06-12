import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {PatientsService} from "../../services/patients.service";
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
    patient?: PatientDetails;
    private image: Image = {} as Image;


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
                private patientService: PatientsService) {
    }

    ngOnInit(): void {
        this.route.paramMap.pipe(mergeMap(params => {
            return this.patientService.getPatient(params.get('id') ?? '')
        })).subscribe(res => {
            if (res.body === null) {
                this.router.navigateByUrl('/notFound');
            } else {
                this.patient = res.body;

            }
        });
    }

    ngAfterViewInit() {
        const canvas = this.windowRef.document.getElementById('canvas');
        const rect = canvas!.getBoundingClientRect();

        const width = rect.width;
        const height = rect.width;

        this.whiteBoard = new WhiteBoard();
        this.whiteBoard.initStage(width, height, 'canvas');
        this.whiteBoard.initMainLayer();

        Konva.Image.fromURL('/assets/test.jpeg', (image) => {
            const scale = Math.min(width / image.getWidth(), height / image.getHeight());
            image.setAttrs({x: 0, y: 0, scale: {x: scale, y: scale}});
            image.cache();
            image.filters([Konva.Filters.Brighten]);
            this.image = image;
            this.whiteBoard.mainLayer.add(image);
        });
    }

    brightnessChanged(event: Event) {
        this.image.brightness(Number((event.target as HTMLInputElement).value));
    }

    toggleFilter(event: Event, filter: Filter) {
        if (this.image.filters().find(x => x === filter) !== undefined) {
            this.image.filters(this.image.filters().filter(x => x !== filter));
        } else {
            this.image.filters().push(filter)
            this.image.filters(this.image.filters());
        }
    }

    protected readonly Filters = Filters;

}

