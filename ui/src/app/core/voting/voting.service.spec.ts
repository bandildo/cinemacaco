import { VotingService } from "./voting.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import { HttpClientModule } from '@angular/common/http';

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

    describe('POST', () => {
        it('should post a copos vote', () => {
            // const applicationId = 'app-id';
            // const member = { email: 'member@mail.com' };
            // const expected = { id: 'the-id', email: 'member@mail.com', role: RoleType.ROLE_ADMIN } as Membership;
      
            // service.addMember(applicationId, member).subscribe(
            //   (added: Membership) => {
            //     expect(added).toEqual(expected);
            //     done();
            //   },
            //   error => fail(error));
      
            // const req = httpMock.expectOne(`/web/applications/${applicationId}/members`);
            // expect(req.request.method).toEqual('POST');
      
            // req.flush(expected);
        });
    });
    
});