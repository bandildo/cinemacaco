import { Component, Input } from '@angular/core';
import { GameService } from '../../core/services/game/game.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { first, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-voting-buttons',
  templateUrl: './voting-buttons.component.html',
  styleUrls: ['./voting-buttons.component.css']
})
export class VotingButtonsComponent {
  constructor(private gameService: GameService, private authService: AuthService) { }

  @Input()
  public isMacaco: boolean;

  onVote(thumbsUp: boolean) {
    if (this.isMacaco) {
      this.gameService.castMacacoVote(thumbsUp).subscribe();
    } else {
      this.authService.user.pipe(
        first(),
        flatMap((user) => this.gameService.castHumanVote(user.uid, thumbsUp))
      ).subscribe();
    }
  }
}
