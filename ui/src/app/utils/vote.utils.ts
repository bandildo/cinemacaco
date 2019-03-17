import { MacacoVote } from '../core/voting/macaco-vote.model';

export default class VoteUtils {
    static getTestMacacoVote(): MacacoVote {
      return {
        name: 'test-movie',
        thumbsUp: true,
        timestamp: new Date()
      } as MacacoVote;
    }
}