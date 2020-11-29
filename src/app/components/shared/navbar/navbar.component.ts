import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '../../../core/interfaces';
import { MENU } from '../../../core/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  @Input() activeRoute: string;

  @ViewChild("search") searchInput: ElementRef;

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

    this.searchIsActivated
      ?
    this.searchInput.nativeElement.focus()
      :
    this.searchInput.nativeElement.blur()
    this.searchInput.nativeElement.value=""
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
