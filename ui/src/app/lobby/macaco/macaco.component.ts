import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MacacoVote } from 'src/app/core/voting/macaco-vote.model';
import { VotingService } from 'src/app/core/voting/voting.service';

@Component({
  templateUrl: './macaco.component.html',
  styleUrls: ['./macaco.component.css']
})
export class MacacoComponent {
  name = new FormControl('');

  vote: MacacoVote;

  constructor(private votingService: VotingService) {}

  onVote(thumbsUp: boolean) {
    this.votingService.castMacacoVote(this.name.value, thumbsUp).subscribe();
  }
}
