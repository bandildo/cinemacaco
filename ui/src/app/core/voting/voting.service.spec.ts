import { VotingService } from './voting.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import VoteUtils from 'src/app/utils/vote.utils';
import { MacacoVote } from './macaco-vote.model';

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
      const expectedVote = VoteUtils.getTestMacacoVote();

      jasmine.clock().mockDate(expectedVote.timestamp);

      service.castMacacoVote(name, true).subscribe(
        (coposVote: MacacoVote) => {
          expect(coposVote).toEqual(expectedVote);
        },
        error => fail(error)
      );

      const call = httpMock.expectOne(
        'https://cinemacaco-app.firebaseio.com/currentGame.json'
      );
      expect(call.request.method).toEqual('PUT');

      call.flush(expectedVote);
    });
  });

  describe('GET', () => {
    it('should get the current game', () => {
      const expectedCurrentGame = VoteUtils.getTestMacacoVote();

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
