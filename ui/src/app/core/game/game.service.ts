import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../voting/vote.model';
import { Game } from './game.model';

@Injectable()
export class GameService {
  
  constructor(private http: HttpClient) {}

  getCurrentGame(): Observable<Game> {
    return this.http.get(
      'https://cinemacaco-app.firebaseio.com/currentGame.json'
    ) as Observable<Game>;
  }

  startGame(id: string, name: string, timestamp: Date): Observable<Game> {
    const game = {
      id,
      name,
      timestamp
    } as Game;

    return this.http.put(
      'https://cinemacaco-app.firebaseio.com/currentGame.json',
      game
    ) as Observable<Game>;
  }

  castMacacoVote(id: string, thumbsUp: boolean): Observable<Vote> {
    const coposVote = {
      id,
      thumbsUp,
    } as Vote;

    return this.http.put(
      'https://cinemacaco-app.firebaseio.com/currentMacacoVote.json',
      coposVote
    ) as Observable<Vote>;
  }

  castHumanVote(id: string, thumbsUp: boolean): Observable<Vote> {
    const coposVote = {
      id,
      thumbsUp,
    } as Vote;

    return this.http.post(
      'https://cinemacaco-app.firebaseio.com/currentHumanVotes.json',
      coposVote
    ) as Observable<Vote>;
  }

  deleteCurrentGame(): Observable<any> {
    return this.http.delete(
      'https://cinemacaco-app.firebaseio.com/currentGame.json'
    ) as Observable<any>;
  }

  deleteCurrentMacacoVote(): Observable<any> {
    return this.http.delete(
      'https://cinemacaco-app.firebaseio.com/currentMacacoVote.json'
    ) as Observable<any>;
  }

  deleteCurrentHumanVotes(): Observable<any> {
    return this.http.delete(
      'https://cinemacaco-app.firebaseio.com/currentHumanVotes.json'
    ) as Observable<any>;
  }
}
