import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ReceivedCovenantComponent } from './components/staff/received-covenant/received-covenant.component';
import { SectionsComponent } from './components/staff/sections/sections.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SalesComponent } from './components/sales/sales.component';
import { DescriptionsComponent } from './components/staff/descriptions/descriptions.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { EmployeeRequestsComponent } from './components/approval-requests/employee-requests/employee-requests.component';
import { TypeEmployeeRequestsComponent } from './components/approval-requests/type-employee-requests/type-employee-requests.component';
import { CategoryEmployeeRequestsComponent } from './components/approval-requests/category-employee-requests/category-employee-requests.component';
import { GoodsVoucherComponent } from './components/sales/goods-voucher/goods-voucher.component';
import { SalesInvoicesComponent } from './components/sales/sales-invoices/sales-invoices.component';
import { CollectionsComponent } from './components/sales/collections/collections.component';
import { ReceiveVoucherComponent } from './components/sales/receive-voucher/receive-voucher.component';
import { ReturnInvoicesComponent } from './components/sales/return-invoices/return-invoices.component';
import { TagComponent } from './components/sales/clients/tag/tag.component';
import { RepaymentPeriodComponent } from './components/sales/clients/repayment-period/repayment-period.component';
import { RepaymentWayComponent } from './components/sales/clients/repayment-way/repayment-way.component';
import { BoxAndCommitmentComponent } from './components/sales/salesResponsible/box-and-commitment/box-and-commitment.component';
import { ContactsComponent } from './components/sales/clients/contacts/contacts.component';
import { BranchesAndLocationsComponent } from './components/sales/clients/branches-and-locations/branches-and-locations.component';
import { ClientsComponent } from './components/sales/clients/clients/clients.component';

const routes: Routes = [
  {path:'forgetPassword', component: ForgetPasswordComponent},
  {path:'registration', component:RegisterComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'login', component: LoginComponent},
  {path:'staff',component:StaffComponent},

  {path:'covenant',component:ReceivedCovenantComponent},
  {path:'sections',component:SectionsComponent},
  {path:'jobs' , component:JobsComponent},
  {path:'sales', component: SalesComponent},
  {path:'description',component:DescriptionsComponent},
  {path:'approval',component:EmployeeRequestsComponent},
  {path:'typeRequest',component:TypeEmployeeRequestsComponent},
  {path:'categoryResquest',component:CategoryEmployeeRequestsComponent},
  {path:'description',component:DescriptionsComponent},
  {path:'goodsVoucher' , component: GoodsVoucherComponent},
  {path:'salesInvoices', component:SalesInvoicesComponent},
  {path:'collections', component: CollectionsComponent},
  {path:'receiveVoucher', component: ReceiveVoucherComponent},
  {path:'returnInvoices' , component:ReturnInvoicesComponent},
  {path:'Tag', component: TagComponent},
  {path:'repaymentPeriod', component:RepaymentPeriodComponent},
  {path:'repaymentWay', component: RepaymentWayComponent},
  {path:'boxAndCommitment' , component: BoxAndCommitmentComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'branchesAndLocationsOfClients', component:BranchesAndLocationsComponent},
  {path:'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
