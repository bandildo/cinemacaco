import { v4 as UUID } from 'uuid';
import { Game } from './../core/game/game.model';

export default class GameUtils {
  static getTestGame(): Game {
    return {
      id: UUID(),
      name: 'test-movie',
      timestamp: new Date()
    } as Game;
  }
}
