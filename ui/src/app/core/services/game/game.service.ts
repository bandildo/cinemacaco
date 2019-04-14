import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UrlUtils from 'src/app/utils/url.utils';
import { Game } from '../../../game/models/game.model';
import { Vote } from '../../../game/models/vote.model';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) { }

  getCurrentGame(): Observable<Game> {
    return this.http.get(UrlUtils.generateDbUrl('/games/current')) as Observable<Game>;
  }

  startGame(game: Game): Observable<any> {
    return this.http.post(
      UrlUtils.generateDbUrl('/games/current'),
      game
    );
  }

  endCurrentGame(): Observable<any> {
    return this.http.delete(
      UrlUtils.generateDbUrl('/games/current')
    );
  }

  castMacacoVote(thumbsUp: boolean): Observable<any> {
    const macacoVote = {
      thumbsUp
    } as Vote;

    return this.http.post(
      UrlUtils.generateDbUrl('/games/vote/macaco'),
      macacoVote
    );
  }

  castHumanVote(userId: string, thumbsUp: boolean): Observable<any> {
    const humanVote = {
      userId,
      thumbsUp
    } as Vote;

    return this.http.post(
      UrlUtils.generateDbUrl('/games/vote/human'),
      humanVote
    );
  }
}
