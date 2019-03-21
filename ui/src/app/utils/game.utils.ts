import { GameFirestore } from './../game/models/game-firestore.model';
import { v4 as UUID } from 'uuid';
import { Game } from '../game/models/game.model';

export default class GameUtils {
  static getTestGame(): Game {
    return {
      id: UUID(),
      name: 'test-movie',
      timestamp: new Date()
    } as Game;
  }

  static getTestGameResponse(): GameFirestore {
    return this.toGameFirestore(this.getTestGame());
  }

  static toGameFirestore(game: Game): GameFirestore {
    return {
      fields: {
        id: {
          stringValue: game.id
        },
        name: {
          stringValue: game.name
        },
        timestamp: {
          timestampValue: game.timestamp
        }
      }
    };
  }

  static toGame(firestoreGame: GameFirestore): Game {
    return {
      id: firestoreGame.fields.id.stringValue,
      name: firestoreGame.fields.name.stringValue,
      timestamp: firestoreGame.fields.timestamp.timestampValue
    } as Game;
  }
}
