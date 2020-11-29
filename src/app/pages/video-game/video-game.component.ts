import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoGame } from '../../core/interfaces';
import { VideoGamesService } from '../../services/video-games.service';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.scss']
})
export class VideoGameComponent implements OnInit {

  videoGameId: number;

  videoGame: VideoGame;

  constructor( private videoGamesService: VideoGamesService,
               private activatedRoute: ActivatedRoute ) {

                 this.activatedRoute.params.subscribe( params => {
                  this.videoGameId = params['id']
                  this.videoGame = this.videoGamesService.getVideoGameById(this.videoGameId);
                  console.log('video-game: ', this.videoGame)
                  console.log(this.videoGameId)
                 });

                }

  ngOnInit(): void {
  }


}
