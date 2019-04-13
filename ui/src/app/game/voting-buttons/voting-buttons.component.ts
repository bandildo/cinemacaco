import { Component, Input } from '@angular/core';
import { GameService } from '../../core/services/game/game.service';

@Component({
  selector: 'app-voting-buttons',
  templateUrl: './voting-buttons.component.html',
  styleUrls: ['./voting-buttons.component.css']
})
export class VotingButtonsComponent {
  constructor(private gameService: GameService) { }

  @Input()
  public isMacaco: boolean;

  onVote(thumbsUp: boolean) {
    if (this.isMacaco) {
      this.gameService.castMacacoVote(thumbsUp).subscribe();
    } else {
      this.gameService.castHumanVote(thumbsUp).subscribe();
    }
  }
}
