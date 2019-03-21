import { GameFirestore } from './../models/game-firestore.model';
import { GameService } from './game.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import VoteUtils from 'src/app/utils/vote.utils';
import GameUtils from 'src/app/utils/game.utils';
import UrlUtils from 'src/app/utils/url.utils';
import { VoteFirestore } from '../models/vote-firestore.model';

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

  describe('PATCH', () => {
    it('Should post new game', () => {
      const expectedGame = GameUtils.getTestGame();
      const expectedGameResponse = GameUtils.toGameFirestore(expectedGame);

      jasmine.clock().mockDate(expectedGame.timestamp);

      service
        .startGame(expectedGame.id, expectedGame.name, expectedGame.timestamp)
        .subscribe(
          (response: GameFirestore) => {
            expect(response).toEqual(expectedGameResponse);
          },
          error => fail(error)
        );

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/info')
      );
      expect(call.request.method).toEqual('PATCH');

      call.flush(expectedGameResponse);
    });
    
    it('should post a Macaco vote', () => {
      const expectedVote = VoteUtils.getTestVote();
      const expectedVoteResponse = VoteUtils.toVoteFirestore(expectedVote);

      service.castMacacoVote(true).subscribe(
        (response: VoteFirestore) => {
          expect(response).toEqual(expectedVoteResponse);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/macacoVote')
      );
      expect(call.request.method).toEqual('PATCH');

      call.flush(expectedVoteResponse);
    });

    it('should patch a Human vote', () => {
      const expectedVote = VoteUtils.getTestVote();
      const expectedVoteResponse = VoteUtils.toVoteFirestore(expectedVote);

      service.castHumanVote(true).subscribe(
        (response: VoteFirestore) => {
          expect(response).toEqual(expectedVoteResponse);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/humanVotes')
      );
      expect(call.request.method).toEqual('PATCH');

      call.flush(expectedVoteResponse);
    });
  });

  describe('POST', () => {

  });

  describe('GET', () => {
    it('should get the current game', () => {
      const expectedGame = GameUtils.getTestGame();
      const expectedGameResponse = GameUtils.toGameFirestore(expectedGame);

      service.getCurrentGame().subscribe(response => {
        expect(response).toEqual(expectedGameResponse);
      });

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/info')
      );
      expect(call.request.method).toEqual('GET');
      call.flush(expectedGameResponse);
    });
  });

  describe('DELETE', () => {
    it('Should delete current game', () => {
      service.deleteCurrentGame().subscribe();

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/info')
      );
      expect(call.request.method).toEqual('DELETE');
    });

    it('Should delete current macaco vote', () => {
      service.deleteCurrentMacacoVote().subscribe();

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/macacoVote')
      );
      expect(call.request.method).toEqual('DELETE');
    });

    it('Should delete current human votes', () => {
      service.deleteCurrentHumanVotes().subscribe();

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/activeGame/humanVotes')
      );
      expect(call.request.method).toEqual('DELETE');
    });
  });
});
