import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../core/interfaces';
import { VideoGamesService } from '../../services/video-games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostPopulars: VideoGame[];

  constructor( private videoGamesService: VideoGamesService ) { }

  ngOnInit(): void {
    this.mostPopulars = this.videoGamesService.getVideoGames();
  }

}
