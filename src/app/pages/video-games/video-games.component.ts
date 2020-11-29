import { Component, OnInit } from '@angular/core';
import { VideoGamesService } from '../../services/video-games.service';
import { VideoGame } from '../../core/interfaces';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {

  videoGames: VideoGame[] = [];

  constructor( private videoGameService: VideoGamesService ) { }

  ngOnInit(): void {
    this.videoGames = this.videoGameService.getVideoGames();
  }

}
