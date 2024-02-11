import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeSkillsComponent } from './employee-skills/employee-skills.component';
import { EmployeeTrainingsComponent } from './employee-trainings/employee-trainings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    EmployeeSkillsComponent,
    EmployeeTrainingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [EmployeeDashboardComponent]
})
export class AppModule { }
