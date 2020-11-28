import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { VideoGame } from '../../core/interfaces';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {

  VideoGames: VideoGame[] = [];

  constructor( private heroService: HeroesService ) { }

  ngOnInit(): void {
    this.VideoGames = this.heroService.getVideoGames();
    console.log(this.VideoGames)
  }

}
