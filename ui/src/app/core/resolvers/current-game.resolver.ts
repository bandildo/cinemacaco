import { VotingService } from './../voting/voting.service';
import { EMPTY, Observable, of } from 'rxjs';
import { MacacoVote } from './../voting/macaco-vote.model';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentGameResolver implements Resolve<MacacoVote> {
  constructor(private votingService: VotingService) {}

  resolve(): Observable<MacacoVote> {
    return this.votingService.getCurrentGame();
  }
}
