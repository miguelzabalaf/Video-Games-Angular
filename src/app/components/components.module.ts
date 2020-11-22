import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from './shared/menu-toggle/menu-toggle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuToggleComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MenuToggleComponent,
    GameCardComponent
  ]
})
export class ComponentsModule { }
