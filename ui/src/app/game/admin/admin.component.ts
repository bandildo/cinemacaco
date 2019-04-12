import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from '../../core/services/game/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  name = new FormControl('');

  constructor(private gameService: GameService) { }

  startGame() {
    const game = {
      name: this.name.value,
    } as Game;

    this.gameService.startGame(game).subscribe();
  }

  endGame() {
    this.gameService.endCurrentGame().subscribe();
  }
}
