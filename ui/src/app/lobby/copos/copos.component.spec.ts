import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CoposComponent } from './copos.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CoposVote } from 'src/app/core/voting/copos-vote.model';
import { VotingService } from 'src/app/core/voting/voting.service';
import { CoreModule } from 'src/app/core/core.module';

describe('CoposComponent', () => {
  let component: CoposComponent;
  let fixture: ComponentFixture<CoposComponent>;

  let votingService: VotingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoposComponent ],
      imports: [
        ReactiveFormsModule,
        CoreModule,
       ],
      
    })
    .compileComponents();
  }));

  beforeEach(inject(
    [
      VotingService
    ],
    (
      injectedVotingService
    ) => {
      votingService = injectedVotingService;
    }
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Game name input text field', () => {
    it('should exist', () => {
      expect(fixture.debugElement.query(By.css('#gameNameInput'))).not.toBeNull();
    });
  });

  describe('Voting buttons', () => {
    it('should have a YES button', () => {
      expect(fixture.debugElement.query(By.css('button.btn-yes'))).not.toBeNull();
    });

    it('should generate a positive CoposVote ', () => {
      const name = "test-movie-name";
      const timestamp = new Date();
      const expectedVote = {
        name,
        thumbsUp: true,
        timestamp
      } as CoposVote;

      component.name.setValue('test-movie-name');
      
      jasmine.clock().mockDate(timestamp);
      spyOn(votingService, 'castCoposVote');

      component.onVote(true);

      expect(votingService.castCoposVote).toHaveBeenCalledWith(expectedVote);
    });

    it('should have a NO button', () => {
      expect(fixture.debugElement.query(By.css('button.btn-no'))).not.toBeNull();
    });
  });
});
