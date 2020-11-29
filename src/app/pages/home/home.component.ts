import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../core/interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostPopulars: VideoGame[];

  constructor( private heroService: HeroesService ) { }

  ngOnInit(): void {
    this.mostPopulars = this.heroService.getVideoGames();
  }

}
