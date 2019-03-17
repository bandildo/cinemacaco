import { MacacoVote } from './../voting/macaco-vote.model';
import { VotingService } from './../voting/voting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreModule } from './../core.module';
import { CurrentGameResolver } from './current-game.resolver';
import { RouterTestingModule } from '@angular/router/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';

describe('CurrentGameResolver', () => {
  let resolver: CurrentGameResolver;
  let votingService: VotingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [CurrentGameResolver]
    }).compileComponents();
  }));

  beforeEach(inject(
    [CurrentGameResolver, VotingService],
    (injectedResolver, injectedVotingService) => {
      resolver = injectedResolver;
      votingService = injectedVotingService;
    }
  ));

  describe('CurrentGameResolver', () => {
    it('should resolve current game when found', () => {
      const timestamp = new Date();
      jasmine.clock().mockDate(timestamp);

      const expectedCurrentGame = {
        name: 'test-movie-name',
        thumbsUp: true,
        timestamp
      } as MacacoVote;

      spyOn(votingService, 'getCurrentGame').and.returnValue(of(expectedCurrentGame));

      resolver.resolve().subscribe((currentGame) => {
        expect(currentGame).toBe(expectedCurrentGame);
      });
    });
  });
});
