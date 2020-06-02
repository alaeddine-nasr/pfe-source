import { Component, OnInit } from '@angular/core';
import { Workandscheduleservice } from './workandschedule.service';
import { Workandschedule } from './workandschedule.model';

@Component({
  selector: 'app-workandschedule',
  templateUrl: './workandschedule.component.html',
  styleUrls: ['./workandschedule.component.css']
})
export class WorkandscheduleComponent implements OnInit {
workandschedule : Workandschedule;

constructor(
    private Workandscheduleservice: Workandscheduleservice) {

    this.workandschedule = new Workandschedule();
   
  }

  ngOnInit(): void {
    this.Workandscheduleservice.getCurrentWorkschedule(1).subscribe((workandschedule: Workandschedule) => {
      this.workandschedule = workandschedule;
    });
  }

}
