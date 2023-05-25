import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {SidebarComponent} from './core/sidebar/sidebar.component';
import {BaseComponent} from './core/base/base.component';
import {SetupService} from "./setup/setup.service";
import { AccountDetailsComponent } from './account/details/account-details.component';
import { AccountSecurityComponent } from './account/security/account-security.component';
import { JoinComponent } from './join/join.component';
import {ImagesModule} from "./images/images.module";

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
    ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        ImagesModule

    ],
    providers: [SetupService],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
