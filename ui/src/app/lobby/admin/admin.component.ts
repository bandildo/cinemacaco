import { GameService } from 'src/app/core/game/game.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { v4 as UUID } from 'uuid';

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
}
