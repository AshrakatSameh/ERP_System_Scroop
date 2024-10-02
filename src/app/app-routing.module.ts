import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ReceivedCovenantComponent } from './components/staff/received-covenant/received-covenant.component';
import { SectionsComponent } from './components/staff/sections/sections.component';

const routes: Routes = [
  {path:'staff',component:StaffComponent},
  {path:'covenant',component:ReceivedCovenantComponent},
  {path:'sections',component:SectionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
