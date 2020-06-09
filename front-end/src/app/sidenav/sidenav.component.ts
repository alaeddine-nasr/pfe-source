import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class sidenavComponent implements OnInit {
  logo:string="https://xpo-pro.com/HRexpo/images/themexpert/home/clients/5.png"
  plus:string="https://img.icons8.com/cotton/2x/plus--v1.png"
  bell:string="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/bell.png"
  profilepic:string="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwRDpymbIBLU9lVMDgRD9w168ZXsc8RnY3_qnNEVNuCuBsAC5"
  constructor() { }


  
  ngOnInit(): void {
  }

}
