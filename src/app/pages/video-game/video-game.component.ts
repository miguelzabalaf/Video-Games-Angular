import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoGame } from '../../core/interfaces';
import { VideoGamesService } from '../../services/video-games.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.scss']
})
export class VideoGameComponent implements OnInit {

  videoGameId: number;

  videoGame: VideoGame;

  constructor( private videoGamesService: VideoGamesService,
               private activatedRoute: ActivatedRoute,
               private _location: Location) {

                 this.activatedRoute.params.subscribe( params => {
                  this.videoGameId = params['id']
                  this.videoGame = this.videoGamesService.getVideoGameById(this.videoGameId);
                 });

                }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back()
  }

}
