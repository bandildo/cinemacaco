import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { v4 as UUID } from 'uuid';
import { GameService } from '../../core/services/game/game.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  name = new FormControl('');

  constructor(private gameService: GameService) {}

  startGame() {
    this.gameService.startGame(UUID(), this.name.value, new Date()).subscribe();
  }

  endGame() {
    this.gameService.deleteCurrentGame().subscribe();
    this.gameService.deleteCurrentHumanVotes().subscribe();
    this.gameService.deleteCurrentMacacoVote().subscribe();
  }
}
