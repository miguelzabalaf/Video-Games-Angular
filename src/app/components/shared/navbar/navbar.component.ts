import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../core/interfaces';
import { MENU } from '../../../core/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  @Input() activeRoute: string;

  searchIsActivated = false;
  menuToggleIsActivated =  false;
  userDeveloperInfoActivated = false;

  menuOptions: MenuItem[] = MENU;

  constructor() {
  }

  ngOnInit() {

  }

  ngDoCheck() {

  }

  searchToggle(): void {
    this.searchIsActivated = !this.searchIsActivated
  }

  menuToogle(): void {
    this.menuToggleIsActivated = !this.menuToggleIsActivated
  }

  userDeveloperInfoToggle(): void {
    this.userDeveloperInfoActivated = !this.userDeveloperInfoActivated
  }

  menuStateChanged(newState: boolean): boolean {
    return this.menuToggleIsActivated = newState
  }

  userDeveloperInfoChanged(newState: boolean): boolean {
    return this.userDeveloperInfoActivated = newState;
  }

}
