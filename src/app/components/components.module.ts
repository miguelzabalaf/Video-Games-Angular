import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from './shared/menu-toggle/menu-toggle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GameCardComponent } from './game-card/game-card.component';
import { UserDeveloperInfoComponent } from './shared/user-developer-info/user-developer-info.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuToggleComponent,
    GameCardComponent,
    UserDeveloperInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MenuToggleComponent,
    GameCardComponent,
    UserDeveloperInfoComponent
  ]
})
export class ComponentsModule { }
