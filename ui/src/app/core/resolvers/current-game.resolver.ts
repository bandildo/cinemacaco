import { GameService } from '../game/game.service';
import { EMPTY, Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Game } from '../game/game.model';

@Injectable()
export class CurrentGameResolver implements Resolve<Game> {
  constructor(private votingService: GameService) {}

  resolve(): Observable<Game> {
    return this.votingService.getCurrentGame();
  }
}
