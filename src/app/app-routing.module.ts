import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {isLoggedIn, isServerSetedup} from "./guards";
import {BaseComponent} from "./core/base/base.component";

const routes: Routes = [
    {
      path: "setup",
      canActivate: [!isServerSetedup],
      loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule),
      pathMatch: 'full'
    },
    {path: 'login', canActivate: [isServerSetedup, !isLoggedIn], component: LoginComponent, pathMatch: 'full'},
    {
      path: '', component: BaseComponent, canActivate: [isServerSetedup, isLoggedIn],
      children: [{
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        pathMatch: 'prefix'
      }]
    },
    {path: '**', component: NotFoundComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
