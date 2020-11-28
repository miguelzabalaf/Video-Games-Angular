import { Component, Input, OnInit } from '@angular/core';
import { VideoGame } from '../../core/interfaces';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() videoGame: VideoGame;

  constructor() { }

  ngOnInit(): void {
  }

}
