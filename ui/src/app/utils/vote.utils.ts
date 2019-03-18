import { Vote } from '../core/voting/vote.model';

export default class VoteUtils {
  static getTestVote(): Vote {
    return {
      id: 'test-id',
      thumbsUp: true,
    } as Vote;
  }
}
