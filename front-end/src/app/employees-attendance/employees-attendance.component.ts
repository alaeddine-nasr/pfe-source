import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-attendance',
  templateUrl: './employees-attendance.component.html',
  styleUrls: ['./employees-attendance.component.css']
})
export class EmployeesAttendanceComponent implements OnInit {
  profilepic:string="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwRDpymbIBLU9lVMDgRD9w168ZXsc8RnY3_qnNEVNuCuBsAC5"
  constructor() { }

  ngOnInit(): void {
  }

}
