import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {LoginComponent} from "./shared/components/login/login.component";
import {isInvited, isLoggedIn, isNotLoggedIn, isServerNotSetup, isServerSetup} from "./guards";
import {BaseComponent} from "./shared/components/core/base/base.component";
import {AccountDetailsComponent} from "./shared/components/account/details/account-details.component";
import {AccountSecurityComponent} from "./shared/components/account/security/account-security.component";
import {JoinComponent} from "./shared/components/join/join.component";
import {ServerSettingComponent} from "./shared/components/server-setting/server-setting.component";

const routes: Routes = [
    {
      path: "setup",
      canActivate: [isServerNotSetup],
      loadChildren: () => import('./modules/setup/setup.module').then(m => m.SetupModule),
      pathMatch: 'full'
    },
    {path: 'login', canActivate: [isServerSetup, isNotLoggedIn], component: LoginComponent, pathMatch: 'full'},
    {
      path: '', component: BaseComponent,
      canActivate: [isServerSetup, isLoggedIn],
      children: [
        {
          path: 'users',
          loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
          pathMatch: 'prefix'
        },
        {
          path: 'patients',
          loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule),
          pathMatch: 'prefix'
        },
        {
          path: 'consultations',
          loadChildren: () => import('./modules/consultations/consultations.module').then(m => m.ConsultationsModule),
          pathMatch: 'prefix'
        },
        {
          path: 'e-learning',
          loadChildren: () => import('./modules/e-learning/e-learning.module').then(m => m.ELearningModule),
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
    {path: 'server-settings', component: ServerSettingComponent, pathMatch: 'full'},
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
