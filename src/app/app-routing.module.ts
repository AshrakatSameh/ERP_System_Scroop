import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'forgetPassword', component: ForgetPasswordComponent},
  {path:'registration', component:RegisterComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'login', component: LoginComponent}

=======
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  {path:'staff',component:StaffComponent},
  {path:'jobs' , component:JobsComponent}
>>>>>>> 2aad62773b41f1ffdad415820e6438e24c5b4fe6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
