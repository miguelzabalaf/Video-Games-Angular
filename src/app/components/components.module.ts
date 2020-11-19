import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuToggleComponent } from './shared/menu-toggle/menu-toggle.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuToggleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
