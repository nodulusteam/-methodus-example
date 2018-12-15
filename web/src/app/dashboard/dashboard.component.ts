import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  subMenuState = 'collapse';
  toggled = false;
  activeClass = '';
  ngOnInit() {
  }

  toggleSubmenu() {
    if (this.subMenuState) {
      this.subMenuState = '';
    } else {
      this.subMenuState = 'collapse';
    }

  }
  toggleSidebar() {
    this.toggled = !this.toggled;
    if (this.toggled) {
      this.activeClass = 'active';
    } else {
      this.activeClass = '';
    }
  }

}
