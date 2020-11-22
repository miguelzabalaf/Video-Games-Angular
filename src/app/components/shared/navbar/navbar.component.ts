import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchIsActivated = false;
  menuToggleIsActivated =  false;

  menuOptions: any[]= [
    {
      name: "Home",
      path: ""
    },
    {
      name: "Video Games",
      path: "video-games"
    },
    {
      name: "About",
      path: "about"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  searchToggle() {
    this.searchIsActivated = !this.searchIsActivated
  }

  menuToogle() {
    this.menuToggleIsActivated = !this.menuToggleIsActivated
  }

  menuStateChanged(newState: boolean) {
    return this.menuToggleIsActivated = newState
  }

}
