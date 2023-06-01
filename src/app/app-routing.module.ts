import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {isInvited, isLoggedIn, isNotLoggedIn, isServerNotSetup, isServerSetup} from "./guards";
import {BaseComponent} from "./core/base/base.component";
import {AccountDetailsComponent} from "./account/details/account-details.component";
import {AccountSecurityComponent} from "./account/security/account-security.component";
import {JoinComponent} from "./join/join.component";

const routes: Routes = [
    {
      path: "setup",
      canActivate: [isServerNotSetup],
      loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule),
      pathMatch: 'full'
    },
    {path: 'login', canActivate: [isServerSetup, isNotLoggedIn], component: LoginComponent, pathMatch: 'full'},
    {
      path: '', component: BaseComponent,
      canActivate: [isServerSetup, isLoggedIn],
      children: [
        {
          path: 'users',
          loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
          pathMatch: 'prefix'
        },
        {
          path: 'images',
          loadChildren: () => import('./images/images.module').then(m => m.ImagesModule),
          pathMatch: 'prefix'
        },
        {
          path: 'patients',
          loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule),
          pathMatch: 'prefix'
        },
        {
          path: 'consultations',
          loadChildren: () => import('./consultations/consultations.module').then(m => m.ConsultationsModule),
          pathMatch: 'prefix'
        },
        {path: 'account/details', component: AccountDetailsComponent, pathMatch: 'full'},
        {path: 'account/security', component: AccountSecurityComponent, pathMatch: 'full'},
        {
          path: '',
          redirectTo: 'patients',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: 'join/:code',
      component: JoinComponent,
      canActivate: [isServerSetup, isInvited]
    },
    {path: 'notFound', component: NotFoundComponent},
    {path: '**', redirectTo: 'notFound'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
