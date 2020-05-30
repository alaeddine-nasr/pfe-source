import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
logo:string="https://xpo-pro.com/HRexpo/images/themexpert/home/clients/5.png"
profilepic:string="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwRDpymbIBLU9lVMDgRD9w168ZXsc8RnY3_qnNEVNuCuBsAC5"
  constructor() { }

  ngOnInit(): void {
  }

}
