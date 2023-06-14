import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../shared/services/users.service";
import {Page} from "../../../shared/models/Page";
import {User} from "../../../shared/models/User";
import {range} from "../../../shared/models/Range";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
})
export class ListUsersComponent implements OnInit {

  page: Page<User> = {} as Page<User>;

  sortBy: string = 'id';
  asc: boolean = true;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res => this.page = res)
  }

  protected readonly Math = Math;

  updatePage(pageNumber: number) {
    this.usersService.getUsers(pageNumber, this.sortBy, this.asc).subscribe(res => this.page = res)

  }

  protected readonly range = range;

  sort(column: string) {
    if (column == this.sortBy) this.asc = !this.asc;
    else this.asc = true;
    this.sortBy = column;
    this.usersService.getUsers(0, column, this.asc).subscribe(res => this.page = res)

  }

}
