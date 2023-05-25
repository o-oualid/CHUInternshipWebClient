import {Component, OnInit} from '@angular/core';
import {Page} from "../../utils/Page";
import {PatientsService} from "../../services/patients.service";
import {Patient} from "../../models/Patient";
import {range} from "../../utils/Range";

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  page: Page<Patient> = {} as Page<Patient>;
  sortBy: string = 'id';
  asc: boolean = true;

  constructor(private patientService: PatientsService) {
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(res => {
      if (res.body != null) this.page = res.body
    })
  }

  protected readonly Math = Math;

  updatePage(pageNumber: number) {
    this.patientService.getPatients(pageNumber, this.sortBy, this.asc).subscribe(res => {
      if (res.body != null) this.page = res.body
    })

  }

  protected readonly range = range;

  sort(column: string) {
    if (column == this.sortBy) this.asc = !this.asc;
    else this.asc = true;
    this.sortBy = column;
    this.patientService.getPatients(0, column, this.asc).subscribe(res => {
      if (res.body != null) this.page = res.body
    })

  }

}
