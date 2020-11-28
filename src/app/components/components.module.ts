import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from './shared/menu-toggle/menu-toggle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GameCardHomeComponent } from './game-card-home/game-card-home.component';
import { UserDeveloperInfoComponent } from './shared/user-developer-info/user-developer-info.component';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuToggleComponent,
    GameCardHomeComponent,
    UserDeveloperInfoComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MenuToggleComponent,
    GameCardHomeComponent,
    UserDeveloperInfoComponent,
    GameCardComponent
  ]
})
export class ComponentsModule { }
