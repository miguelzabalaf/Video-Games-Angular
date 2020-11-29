import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoGamesComponent } from './pages/video-games/video-games.component';
import { AboutComponent } from './pages/about/about.component';
import { VideoGameComponent } from './pages/video-game/video-game.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video-games', component: VideoGamesComponent },
  { path: 'video-game/:id', component: VideoGameComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
