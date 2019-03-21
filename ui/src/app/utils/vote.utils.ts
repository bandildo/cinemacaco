import { Vote } from '../game/models/vote.model';
import { VoteFirestore } from '../game/models/vote-firestore.model';

export default class VoteUtils {
  static getTestVote(): Vote {
    return {
      thumbsUp: true
    } as Vote;
  }

  static getTestVoteResponse(): VoteFirestore {
    return this.toVoteFirestore(this.getTestVote());
  }

  static toVoteFirestore(vote: Vote): VoteFirestore {
    return {
      fields: {
        thumbsUp: {
          booleanValue: vote.thumbsUp
        }
      }
    };
  }
}
