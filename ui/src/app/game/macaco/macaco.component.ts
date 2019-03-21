import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/game/models/game.model';

@Component({
  templateUrl: './macaco.component.html',
  styleUrls: ['./macaco.component.css']
})
export class MacacoComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  currentGame: Game;

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolvedData => {
      this.currentGame = resolvedData.currentGame;
    });
  }
}
