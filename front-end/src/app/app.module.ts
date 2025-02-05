import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ConfigbodyComponent } from "./configbody/configbody.component";
import { RouterModule } from "@angular/router";
import { CompanyinfoComponent } from "./companyinfo/companyinfo.component";
import { TimeGeneralSettingsComponent } from "./time-general-settings/time-general-settings.component";
import { WorkandscheduleComponent } from "./workandschedule/workandschedule.component";
import { MyattendanceComponent } from "./myattendance/myattendance.component";
import { sidenavComponent } from "./sidenav/sidenav.component";
import { EmployeesAttendanceComponent } from "./employees-attendance/employees-attendance.component";
import { CalanderviewComponent } from "./calanderview/calanderview.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ClockinComponent } from "./clockin/clockin.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { CompanyDetailsComponent } from "./company-details/company-details.component";
import { SecondnavbarComponent } from './secondnavbar/secondnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CalanderviewComponent,
    ConfigbodyComponent,
    CompanyinfoComponent,
    TimeGeneralSettingsComponent,
    WorkandscheduleComponent,
    MyattendanceComponent,
    sidenavComponent,
    EmployeesAttendanceComponent,
    ClockinComponent,
    TimesheetComponent,
    CompanyDetailsComponent,
    SecondnavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: NavComponent, outlet: "navbar" },
      { path: "", component: ConfigbodyComponent },
      { path: "companyinfo", component: CompanyinfoComponent },
      { path: "timegeneralsettings", component: TimeGeneralSettingsComponent },
      { path: "workandschedule", component: WorkandscheduleComponent },
      { path: "calendarview", component: CalanderviewComponent },
      { path: "myattendance", component: MyattendanceComponent },
      { path: "clockin", component: ClockinComponent },
      { path: "timesheet", component: TimesheetComponent },
      { path: "nav1", component: NavComponent, outlet: "navbar" },
      { path: "nav2", component: SecondnavbarComponent, outlet: "navbar" },
      { path: "", component: sidenavComponent, outlet: "sidenav" },

      {
        path: "employeesattendance",
        component: EmployeesAttendanceComponent,
        children: [
          { path: "nav2", component: SecondnavbarComponent, outlet: "navbar" },
        ],
      },
    ]),
  ],
  providers: [],
  entryComponents: [CompanyDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
