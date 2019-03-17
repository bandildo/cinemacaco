import { VotingService } from './voting.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import VoteUtils from 'src/app/utils/vote.utils';
import { Vote } from './vote.model';

describe('Voting Service', () => {
  let service: VotingService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController, VotingService],
    (httpTestingController, injectedVotingService) => {
      httpMock = httpTestingController;
      service = injectedVotingService;
    }
  ));

  describe('UPDATE', () => {
    it('should post a Macaco vote', () => {
      const expectedVote = VoteUtils.getTestVote();

      jasmine.clock().mockDate(expectedVote.timestamp);

      service.castMacacoVote(name, true).subscribe(
        (vote: Vote) => {
          expect(vote).toEqual(expectedVote);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentGame.json'
      );
      expect(call.request.method).toEqual('PUT');

      call.flush(expectedVote);
    });

    it('should post a Human vote', () => {
      const expectedVote = VoteUtils.getTestVote();

      jasmine.clock().mockDate(expectedVote.timestamp);

      service.castVote(name, true).subscribe(
        (vote: Vote) => {
          expect(vote).toEqual(expectedVote);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentVotes.json'
      );
      expect(call.request.method).toEqual('POST');

      call.flush(expectedVote);
    });
  });

  describe('GET', () => {
    it('should get the current game', () => {
      const expectedCurrentGame = VoteUtils.getTestVote();

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
