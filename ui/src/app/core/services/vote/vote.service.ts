import { Injectable } from '@angular/core';
import { Vote } from '../../../game/models/vote.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import UrlUtils from 'src/app/utils/url.utils';


@Injectable()
export class VoteService {

  constructor(private http: HttpClient) { }

  castVote(userId: string, gameId: string, thumbsUp: boolean): Observable<any> {
    const vote = {
      userId,
      gameId,
      thumbsUp
    } as Vote;

    return this.http.post(
      UrlUtils.api('/votes'),
      vote
    );
  }
}
