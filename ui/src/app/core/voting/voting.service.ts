import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MacacoVote } from './macaco-vote.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable()
export class VotingService {
    constructor(private http: HttpClient) {
    }

    castMacacoVote(name: string, thumbsUp: boolean): Observable<MacacoVote> {
        let coposVote = {
            name,
            thumbsUp,
            timestamp: new Date()
          } as MacacoVote;

          return this.http.put('https://cinemacaco-app.firebaseio.com/currentGame.json', coposVote) as Observable<MacacoVote>;
    }
}