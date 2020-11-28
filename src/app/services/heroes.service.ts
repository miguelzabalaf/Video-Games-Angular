import { Injectable } from '@angular/core';
import { VIDEO_GAMES } from '../core/data';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private videoGames = VIDEO_GAMES;

  constructor() { }

  getVideoGames() {
    return this.videoGames;
  }
}
