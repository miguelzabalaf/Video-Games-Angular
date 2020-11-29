import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { VideoGameComponent } from './video-game/video-game.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    VideoGamesComponent,
    VideoGameComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    VideoGamesComponent,
    VideoGameComponent
  ]
})
export class PagesModule { }
