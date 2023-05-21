import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {AddUserComponent} from "./add-user/add-user.component";

const routes: Routes = [
  {path: 'list', component: ListUsersComponent, pathMatch: 'full'},
  {path: 'add', component: AddUserComponent, pathMatch: 'full'},
  {path:'',redirectTo:'list',pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
