import { Game } from '../game/models/game.model';

export default class GameUtils {
  static getTestGame(): Game {
    return {
      name: 'test-movie',
    } as Game;
  }
}
