import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from './shared/menu-toggle/menu-toggle.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { VideoGamesComponent } from './video-games/video-games.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuToggleComponent,
    HomeComponent,
    AboutComponent,
    VideoGamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MenuToggleComponent,
    HomeComponent,
    AboutComponent,
    VideoGamesComponent
  ]
})
export class ComponentsModule { }
