import { VoteFirestore } from '../../../game/models/vote-firestore.model';
import { GameFirestore } from '../../../game/models/game-firestore.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import GameUtils from 'src/app/utils/game.utils';
import UrlUtils from 'src/app/utils/url.utils';
import VoteUtils from 'src/app/utils/vote.utils';
import { Game } from '../../../game/models/game.model';
import { Vote } from '../../../game/models/vote.model';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  getCurrentGame(): Observable<GameFirestore> {
    return this.http.get(
      UrlUtils.generateDbUrl('/activeGame/info')
    ) as Observable<GameFirestore>;  }

  startGame(id: string, name: string, timestamp: Date): Observable<GameFirestore> {
    const game = {
      id,
      name,
      timestamp
    } as Game;

    return this.http.patch(
      UrlUtils.generateDbUrl('/activeGame/info'),
      GameUtils.toGameFirestore(game)
    ) as Observable<GameFirestore>;
  }

  castMacacoVote(thumbsUp: boolean): Observable<VoteFirestore> {
    const macacoVote = {
      thumbsUp
    } as Vote;

    return this.http.patch(
      UrlUtils.generateDbUrl('/activeGame/macacoVote'),
      VoteUtils.toVoteFirestore(macacoVote)
    ) as Observable<VoteFirestore>;
  }

  castHumanVote(thumbsUp: boolean): Observable<VoteFirestore> {
    const macacoVote = {
      thumbsUp
    } as Vote;

    return this.http.patch(
      UrlUtils.generateDbUrl('/activeGame/humanVotes'),
      VoteUtils.toVoteFirestore(macacoVote)
    ) as Observable<VoteFirestore>;
  }

  deleteCurrentGame(): Observable<any> {
    return this.http.delete(
      UrlUtils.generateDbUrl('/activeGame/info')
    ) as Observable<any>;
  }

  deleteCurrentMacacoVote(): Observable<any> {
    return this.http.delete(
      UrlUtils.generateDbUrl('/activeGame/macacoVote')
    ) as Observable<any>;
  }

  deleteCurrentHumanVotes(): Observable<any> {
    return this.http.delete(
      UrlUtils.generateDbUrl('/activeGame/humanVotes')
    ) as Observable<any>;
  }
}
