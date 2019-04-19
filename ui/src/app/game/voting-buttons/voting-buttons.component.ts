import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { first, flatMap } from 'rxjs/operators';
import { VoteService } from 'src/app/core/services/vote/vote.service';

@Component({
  selector: 'app-voting-buttons',
  templateUrl: './voting-buttons.component.html',
  styleUrls: ['./voting-buttons.component.css']
})
export class VotingButtonsComponent {
  constructor(private authService: AuthService, private voteService: VoteService) { }

  @Input()
  public gameId: string;

  onVote(thumbsUp: boolean) {
    this.authService.user.pipe(
      first(),
      flatMap((user) => this.voteService.castVote(user.id, this.gameId, thumbsUp))
    ).subscribe();
  }
}
