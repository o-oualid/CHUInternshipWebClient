import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './shared/components/login/login.component';
import {NgOptimizedImage} from "@angular/common";
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './shared/components/core/header/header.component';
import {FooterComponent} from './shared/components/core/footer/footer.component';
import {SidebarComponent} from './shared/components/core/sidebar/sidebar.component';
import {BaseComponent} from './shared/components/core/base/base.component';
import {SetupService} from "./modules/setup/setup.service";
import {AccountDetailsComponent} from './shared/components/account/details/account-details.component';
import {AccountSecurityComponent} from './shared/components/account/security/account-security.component';
import {JoinComponent} from './shared/components/join/join.component';
import {ServerSettingComponent} from './shared/components/server-setting/server-setting.component';
import {RegionsService} from "./shared/services/regions.service";
import {DiabetesTypesService} from "./shared/services/diabetes-types.service";
import {UtilsModule} from "./modules/images/utils.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BaseComponent,
    AccountDetailsComponent,
    AccountSecurityComponent,
    JoinComponent,
    ServerSettingComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    UtilsModule

  ],
  providers: [SetupService, RegionsService, DiabetesTypesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
