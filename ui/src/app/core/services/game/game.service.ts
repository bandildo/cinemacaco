import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UrlUtils from 'src/app/utils/url.utils';
import { Game } from '../../../game/models/game.model';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) { }

  getActiveGame(): Observable<Game> {
    return this.http.get(UrlUtils.api('/games/active')) as Observable<Game>;
  }

  startNewGame(game: Game): Observable<any> {
    return this.http.post(
      UrlUtils.api('/games'),
      game
    );
  }

  endActiveGame(): Observable<any> {
    return this.http.delete(
      UrlUtils.api('/games/active')
    );
  }
}
