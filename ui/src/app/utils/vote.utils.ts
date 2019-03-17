import { Vote } from '../core/voting/vote.model';

export default class VoteUtils {
  static getTestVote(): Vote {
    return {
      name: 'test-movie',
      thumbsUp: true,
      timestamp: new Date(),
    } as Vote;
  }
}
