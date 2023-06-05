import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {SidebarComponent} from './core/sidebar/sidebar.component';
import {BaseComponent} from './core/base/base.component';
import {SetupService} from "./setup/setup.service";
import {AccountDetailsComponent} from './account/details/account-details.component';
import {AccountSecurityComponent} from './account/security/account-security.component';
import {JoinComponent} from './join/join.component';
import {ImagesModule} from "./images/images.module";
import {ServerSettingComponent} from './server-setting/server-setting.component';
import {RegionsService} from "./services/regions.service";
import {DiabetesTypesService} from "./services/diabetes-types.service";
import {UtilsModule} from "./utils/utils.module";

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
    ImagesModule,
    FormsModule,
    UtilsModule

  ],
  providers: [SetupService, RegionsService, DiabetesTypesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
