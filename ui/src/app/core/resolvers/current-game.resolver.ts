import { GameService } from '../services/game/game.service';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Game } from '../../game/models/game.model';

@Injectable()
export class CurrentGameResolver implements Resolve<Game> {
  constructor(private votingService: GameService) {}

  resolve(): Observable<Game> {
    return this.votingService.getCurrentGame();
  }
}
