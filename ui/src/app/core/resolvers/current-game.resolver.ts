import { VotingService } from './../voting/voting.service';
import { EMPTY, Observable, of } from 'rxjs';
import { Vote } from '../voting/vote.model';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentGameResolver implements Resolve<Vote> {
  constructor(private votingService: VotingService) {}

  resolve(): Observable<Vote> {
    return this.votingService.getCurrentGame();
  }
}
