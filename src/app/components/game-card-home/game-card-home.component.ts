import { Component, Input, OnInit } from '@angular/core';
import { VideoGame } from '../../core/interfaces';

@Component({
  selector: 'app-game-card-home',
  templateUrl: './game-card-home.component.html',
  styleUrls: ['./game-card-home.component.scss']
})
export class GameCardHomeComponent implements OnInit {

  @Input() videoGame: VideoGame;

  constructor() { }

  ngOnInit(): void {
  }

}
