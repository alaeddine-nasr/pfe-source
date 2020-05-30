import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myattendance',
  templateUrl: './myattendance.component.html',
  styleUrls: ['./myattendance.component.css']
})
export class MyattendanceComponent implements OnInit {
  calendar:string="https://www.joinourbridge.org/wp-content/uploads/2016/08/icon-calendar-teal.png"
  comment:string="https://www.nicepng.com/png/full/207-2078472_comments-youve-made-fb-comment-icon-png.png"
  menu:string="https://i.ya-webdesign.com/images/three-dots-menu-png-18.png"

  constructor() { }

  ngOnInit(): void {
  }

}


