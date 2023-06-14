import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {UserDetailsComponent} from "./details/user-details.component";

const routes: Routes = [
  {path: '', component: ListUsersComponent, pathMatch: 'full'},
  {path: 'add', component: AddUserComponent, pathMatch: 'full'},
  {path: ':id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
