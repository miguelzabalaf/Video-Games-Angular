import { Injectable } from '@angular/core';
import { VIDEO_GAMES } from '../core/data';
import { VideoGame } from '../core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  public videoGames = VIDEO_GAMES;

  constructor() { }

  public getVideoGames() {
    return this.videoGames;
  }

  public getVideoGameById(idx: number): VideoGame {
    const videoGameFiltered = this.videoGames.filter( vg => vg.id == idx );
    return videoGameFiltered[0];
  }
}
