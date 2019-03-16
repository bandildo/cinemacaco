import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CoposVote } from './copos-vote.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable()
export class VotingService {
    constructor(private http: HttpClient) {
    }

    castCoposVote(name: string, thumbsUp: boolean): Observable<CoposVote> {
        let coposVote = {
            name,
            thumbsUp,
            timestamp: new Date()
          } as CoposVote;

          return this.http.put('https://cinemacaco-app.firebaseio.com/currentGame.json', coposVote) as Observable<CoposVote>;
    }
}