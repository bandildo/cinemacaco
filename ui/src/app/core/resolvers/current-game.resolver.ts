import { GameFirestore } from './../../game/models/game-firestore.model';
import { GameService } from '../services/game/game.service';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Game } from '../../game/models/game.model';
import GameUtils from 'src/app/utils/game.utils';

@Injectable()
export class CurrentGameResolver implements Resolve<Game> {
  constructor(private votingService: GameService) {}

  resolve(): Observable<Game> {
    return this.votingService.getCurrentGame().pipe(
      flatMap((gameFirestore: GameFirestore) => {
        return of(GameUtils.toGame(gameFirestore)) as Observable<Game>;
      })
    );
  }
}
