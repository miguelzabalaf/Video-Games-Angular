import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-developer-info',
  templateUrl: './user-developer-info.component.html',
  styleUrls: ['./user-developer-info.component.scss']
})
export class UserDeveloperInfoComponent implements OnInit {

  @Input() isUserDeveloperInfoToggleActivated: Boolean;
  @Output() userDeveloperInfoToggleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  dismissUserDeveloperInfo() {
    this.userDeveloperInfoToggleChange.emit(!this.isUserDeveloperInfoToggleActivated)
  }

}
