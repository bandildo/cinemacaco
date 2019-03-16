import { VotingService } from "./voting.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import { CoposVote } from './copos-vote.model';

describe('Voting Service', () => {
    let service: VotingService;
  
    let httpMock: HttpTestingController;
  
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                CoreModule,
            ],
        })
        .compileComponents();
      }));

    beforeEach(inject(
        [
            HttpTestingController,
            VotingService
        ],
        (
            httpTestingController,
            injectedVotingService,
        ) => {
        httpMock = httpTestingController;
        service = injectedVotingService;
    }));

    describe('UPDATE', () => {
        it('should post a copos vote', () => {
            const name = "test-movie-name";
            const timestamp = new Date();

            const expectedVote = {
              name,
              thumbsUp: true,
              timestamp
            } as CoposVote;

            jasmine.clock().mockDate(timestamp);
            
            service.castCoposVote(name, true).subscribe(
                (coposVote: CoposVote) => {
                    expect(coposVote).toEqual(expectedVote);
                },
                error => fail(error)
            );

            const call = httpMock.expectOne('https://cinemacaco-app.firebaseio.com/currentGame.json');
            expect(call.request.method).toEqual('PUT');

            call.flush(expectedVote);
        });
    });
    
});