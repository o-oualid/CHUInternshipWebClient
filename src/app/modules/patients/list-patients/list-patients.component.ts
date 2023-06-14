import {Component, OnInit} from '@angular/core';
import {Page} from "../../../shared/models/Page";
import {PatientsService} from "../../../shared/services/patients.service";
import {Patient} from "../../../shared/models/Patient";
import {range} from "../../../shared/models/Range";

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
})
export class ListPatientsComponent implements OnInit {

  page: Page<Patient> = {} as Page<Patient>;
  sortBy: string = 'id';
  asc: boolean = true;

  date: Date = new Date();

  constructor(private patientService: PatientsService) {
  }

  ngOnInit(): void {
    this.patientService.getPatientsWithAConsultationOnDate(this.date).subscribe(res => {
      if (res.body != null) this.page = res.body
    });
  }

  protected readonly Math = Math;

  updatePage(pageNumber: number) {
    this.patientService.getPatientsWithAConsultationOnDate(this.date, pageNumber, this.sortBy, this.asc).subscribe(res => {
      if (res.body != null) this.page = res.body
    })

  }

  protected readonly range = range;

  sort(column: string) {
    if (column == this.sortBy) this.asc = !this.asc;
    else this.asc = true;
    this.sortBy = column;
    this.patientService.getPatientsWithAConsultationOnDate(this.date, 0, column, this.asc).subscribe(res => {
      if (res.body != null) this.page = res.body
    })

  }

  dateChanged(event: Event) {
    this.date = new Date((event.target as HTMLInputElement).value);
    this.patientService.getPatientsWithAConsultationOnDate(this.date).subscribe(res => {
      if (res.body != null) this.page = res.body
    });
  }

  protected readonly Date = Date;
  searchTerm: string = "";


  search() {
    if (this.searchTerm.trim().length < 3) return;
    this.patientService.findPatientsByName(this.searchTerm).subscribe(res => {
      if (res.body != null) this.page = res.body
    });
  }
}
