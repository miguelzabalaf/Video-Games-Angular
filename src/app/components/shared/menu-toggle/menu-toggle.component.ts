import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent implements OnInit {

  @Input() options: Array<any>;
  @Input() isMenuToggleActivated: boolean;
  @Output() menuToogleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  navigateToggle() {
    this.menuToogleChange.emit(!this.isMenuToggleActivated)
  }

}
