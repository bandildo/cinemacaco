import { Vote } from '../core/voting/vote.model';

export default class VoteUtils {
  static getTestVote(isMacaco: boolean): Vote {
    return {
      name: 'test-movie',
      thumbsUp: true,
      timestamp: new Date(),
      isMacaco
    } as Vote;
  }

  static getTestMacacoVote(): Vote {
    return this.getTestVote(true);
  }
}
