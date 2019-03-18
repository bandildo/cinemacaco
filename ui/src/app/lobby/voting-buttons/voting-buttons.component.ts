import { GameService } from 'src/app/core/game/game.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voting-buttons',
  templateUrl: './voting-buttons.component.html',
  styleUrls: ['./voting-buttons.component.css']
})
export class VotingButtonsComponent {
  constructor(private gameService: GameService) {}

  @Input()
  public isMacaco: boolean;

  @Input()
  public gameId: string;

  onVote(thumbsUp: boolean) {
    if (this.isMacaco) {
      this.gameService.castMacacoVote(this.gameId, thumbsUp).subscribe();
    } else {
      this.gameService.castHumanVote(this.gameId, thumbsUp).subscribe();
    }
  }
}
