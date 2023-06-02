import {Component} from '@angular/core';
import {DiabetesTypesService} from "../services/diabetes-types.service";
import {RegionsService} from "../services/regions.service";

@Component({
  selector: 'app-server-setting',
  templateUrl: './server-setting.component.html',
  styleUrls: ['./server-setting.component.css']
})
export class ServerSettingComponent {
  diabetesType: string = '';
  region: string = '';

  constructor(private diabetesTypesService: DiabetesTypesService, private regionsService: RegionsService) {

  }

  addDiabetesType() {
    if(this.diabetesType.trim().length>3){
      this.diabetesTypesService.addDiabetesType(this.diabetesType);
    }
  }

  addRegion() {
    if(this.region.trim().length>3){
      this.regionsService.addRegion(this.region);
    }
  }
}
