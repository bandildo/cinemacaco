import { Vote } from 'src/app/game/models/vote.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/game/models/game.model';

@Component({
  templateUrl: './humano.component.html',
  styleUrls: ['./humano.component.css']
})
export class HumanoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  currentGame: Game;

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolvedData => {
      this.currentGame = resolvedData.currentGame;
    });
  }
}
