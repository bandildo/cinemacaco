import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/game/models/game.model';

@Component({
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  currentGame: Game;

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (resolvedData) =>
        this.currentGame = resolvedData.currentGame
    );
  }

  hasGame(): boolean {
    return !!this.currentGame;
  }
}
