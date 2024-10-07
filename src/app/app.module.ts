import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Translation imports

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ReceivedCovenantComponent } from './components/staff/received-covenant/received-covenant.component'
import { RouterModule } from '@angular/router';
import { SectionsComponent } from './components/staff/sections/sections.component';
import { SalesComponent } from './components/sales/sales.component';
import { DescriptionsComponent } from './components/staff/descriptions/descriptions.component';
import { GoodsVoucherComponent } from './components/sales/goods-voucher/goods-voucher.component';
import { EmployeeRequestsComponent } from './components/approval-requests/employee-requests/employee-requests.component';
import { TypeEmployeeRequestsComponent } from './components/approval-requests/type-employee-requests/type-employee-requests.component';
import { CategoryEmployeeRequestsComponent } from './components/approval-requests/category-employee-requests/category-employee-requests.component';
import { SalesInvoicesComponent } from './components/sales/sales-invoices/sales-invoices.component';
import { CollectionsComponent } from './components/sales/collections/collections.component';
import { ReceiveVoucherComponent } from './components/sales/receive-voucher/receive-voucher.component';
import { ReturnInvoicesComponent } from './components/sales/return-invoices/return-invoices.component';
import { TagComponent } from './components/sales/clients/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StaffComponent,
    JobsComponent,
    ReceivedCovenantComponent,
    SectionsComponent,
    SalesComponent,
    DescriptionsComponent,
    GoodsVoucherComponent,
    EmployeeRequestsComponent,
    TypeEmployeeRequestsComponent,
    CategoryEmployeeRequestsComponent,
    SalesInvoicesComponent,
    CollectionsComponent,
    ReceiveVoucherComponent,
    ReturnInvoicesComponent,
    TagComponent
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