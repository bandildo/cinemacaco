import { TestBed, async, inject } from '@angular/core/testing';
import { VoteService } from './vote.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreModule } from '../../core.module';
import UrlUtils from 'src/app/utils/url.utils';

describe('Vote Service', () => {
  let service: VoteService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController, VoteService],
    (httpTestingController, injectedVoteService) => {
      httpMock = httpTestingController;
      service = injectedVoteService;
    }
  ));

  describe('POST', () => {
    it('Should cast a vote', () => {
      service.castVote('user-id', 'game-id', true).subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(
        UrlUtils.api('/votes')
      );

      expect(call.request.method).toEqual('POST');
    });
  });
});
