import { Injectable } from '@angular/core';
import { Workandschedule } from './workandschedule.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class Workandscheduleservice {
  currentWorkschedule: Workandschedule;
  constructor(private http: HttpClient) {}

  getCurrentWorkschedule(workscheduleID: number) {
    return this.http.get<Workandschedule>(
      environment.apiURL + "/WorkSchedules/" + workscheduleID
    );
  }

  public updateCompany(workschedule: Workandschedule) {
    let endPoints = "/WorkSchedules/"+workschedule.WorkScheduleID;
    this.http.put(environment.apiURL + endPoints , workschedule).subscribe(data => {
      
      console.log(data);
    });
  }

}
