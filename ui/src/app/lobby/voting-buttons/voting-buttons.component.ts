import { VotingService } from 'src/app/core/voting/voting.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voting-buttons',
  templateUrl: './voting-buttons.component.html',
  styleUrls: ['./voting-buttons.component.css']
})
export class VotingButtonsComponent {
  constructor(private votingService: VotingService) {}

  @Input()
  public isMacaco: boolean;

  @Input()
  public gameName: string;

  onVote(thumbsUp: boolean) {
    if (this.isMacaco) {
      this.votingService.castMacacoVote(this.gameName, thumbsUp).subscribe();
    } else {
      this.votingService.castVote(this.gameName, thumbsUp).subscribe();
    }
  }
}
