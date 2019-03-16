import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoposVote } from 'src/app/core/voting/copos-vote.model';
import { VotingService } from 'src/app/core/voting/voting.service';

@Component({
  selector: 'app-copos',
  templateUrl: './copos.component.html',
  styleUrls: ['./copos.component.css']
})

export class CoposComponent {
  name = new FormControl('');

  vote: CoposVote;

  constructor(private votingService: VotingService) {
  }

  onVote(thumbsUp: boolean) {
    let vote = {
      name: this.name.value,
      thumbsUp,
      timestamp: new Date()
    } as CoposVote;

    this.votingService.castCoposVote(vote);
  }
}
