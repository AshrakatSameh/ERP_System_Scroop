import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  {path:'staff',component:StaffComponent},
  {path:'jobs' , component:JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
