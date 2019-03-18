import { GameService } from './game.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import VoteUtils from 'src/app/utils/vote.utils';
import { Vote } from '../voting/vote.model';
import GameUtils from 'src/app/utils/game.utils';
import { Game } from './game.model';

describe('Game Service', () => {
  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController, GameService],
    (httpTestingController, injectedVotingService) => {
      httpMock = httpTestingController;
      service = injectedVotingService;
    }
  ));

  describe('PUT', () => {
    it('Should put new game', () => {
      const expectedGame = GameUtils.getTestGame();

      jasmine.clock().mockDate(expectedGame.timestamp);

      service.startGame(expectedGame.id, expectedGame.name, expectedGame.timestamp).subscribe(
        (game: Game) => {
          expect(game).toEqual(expectedGame);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentGame.json'
      );
      expect(call.request.method).toEqual('PUT');

      call.flush(expectedGame);
    });

    it('should put a Macaco vote', () => {
      const expectedVote = VoteUtils.getTestVote();

      jasmine.clock().mockDate(expectedVote.timestamp);

      service.castMacacoVote(name, true).subscribe(
        (vote: Vote) => {
          expect(vote).toEqual(expectedVote);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentMacacoVote.json'
      );
      expect(call.request.method).toEqual('PUT');

      call.flush(expectedVote);
    });
  });

  describe('POST', () => {
    it('should post a Human vote', () => {
      const expectedVote = VoteUtils.getTestVote();

      jasmine.clock().mockDate(expectedVote.timestamp);

      service.castHumanVote(name, true).subscribe(
        (vote: Vote) => {
          expect(vote).toEqual(expectedVote);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentHumanVotes.json'
      );
      expect(call.request.method).toEqual('POST');

      call.flush(expectedVote);
    });
  });

  describe('GET', () => {
    it('should get the current game', () => {
      const expectedCurrentGame = GameUtils.getTestGame();

      service.getCurrentGame().subscribe(currentGame => {
        expect(currentGame).toEqual(expectedCurrentGame);
      });

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentGame.json'
      );
      expect(call.request.method).toEqual('GET');
      call.flush(expectedCurrentGame);
    });
  });
});
