import { Component, OnInit } from '@angular/core';
import { VideoGamesService } from '../../services/video-games.service';
import { VideoGame } from '../../core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {

  videoGames: VideoGame[] = [];

  constructor( private videoGameService: VideoGamesService,
               private _router: Router ) { }

  ngOnInit(): void {
    this.videoGames = this.videoGameService.getVideoGames();
  }

  showVideoGameHero() {
    this._router.navigate(['video-game', this.videoGames[0].id])
  }

}
