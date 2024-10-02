import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';

// Translation imports

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ReceivedCovenantComponent } from './components/staff/received-covenant/received-covenant.component'
import { RouterModule } from '@angular/router';
import { SectionsComponent } from './components/staff/sections/sections.component';
import { SalesComponent } from './components/sales/sales.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    LoginComponent,
    StaffComponent,
    JobsComponent,
    ReceivedCovenantComponent,
    SectionsComponent,
    SalesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    // TranslateModule.forRoot({
    //   defaultLanguage: 'ar',

    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   },
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }