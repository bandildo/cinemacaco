import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vote } from './vote.model';
import { Observable, EMPTY, of } from 'rxjs';

@Injectable()
export class VotingService {
  constructor(private http: HttpClient) {}

  castMacacoVote(name: string, thumbsUp: boolean): Observable<Vote> {
    const coposVote = {
      name,
      thumbsUp,
      timestamp: new Date(),
    } as Vote;

    return this.http.put(
      'https://cinemacaco-app.firebaseio.com/currentGame.json',
      coposVote
    ) as Observable<Vote>;
  }

  castVote(name: string, thumbsUp: boolean): Observable<Vote> {
    const coposVote = {
      name,
      thumbsUp,
      timestamp: new Date(),
    } as Vote;

    return this.http.post(
      'https://cinemacaco-app.firebaseio.com/currentVotes.json',
      coposVote
    ) as Observable<Vote>;
  }

  getCurrentGame(): Observable<Vote> {
    return this.http.get('https://cinemacaco-app.firebaseio.com/currentGame.json') as Observable<Vote>;
  }
}
