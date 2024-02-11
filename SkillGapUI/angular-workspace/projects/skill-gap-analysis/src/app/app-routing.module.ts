import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeSkillsComponent } from './employee-skills/employee-skills.component';
import { EmployeeTrainingsComponent } from './employee-trainings/employee-trainings.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoareyouComponent } from './whoareyou/whoareyou.component';

const routes: Routes = [
  {
    path:'profile',component:EmployeeProfileComponent
  },
  {
    path:'myskills',component:EmployeeSkillsComponent
  },
  {
    path:'mytrainings',component:EmployeeTrainingsComponent
  },
  {
    path:'home',component:HomeComponent             
  },
  {
    path:"whoareyou",component:WhoareyouComponent
  }

]; AppComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
