import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ReceivedCovenantComponent } from './components/staff/received-covenant/received-covenant.component';
import { SectionsComponent } from './components/staff/sections/sections.component';
import { SalesComponent } from './components/sales/sales.component';


const routes: Routes = [
  {path:'forgetPassword', component: ForgetPasswordComponent},
  {path:'registration', component:RegisterComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'login', component: LoginComponent},
  {path:'staff',component:StaffComponent},

  {path:'covenant',component:ReceivedCovenantComponent},
  {path:'sections',component:SectionsComponent},
  {path:'jobs' , component:JobsComponent},
  {path:'sales', component: SalesComponent}
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
