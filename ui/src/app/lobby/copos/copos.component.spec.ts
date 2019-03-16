import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CoposComponent } from './copos.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CoposVote } from 'src/app/core/voting/copos-vote.model';
import { VotingService } from 'src/app/core/voting/voting.service';
import { CoreModule } from 'src/app/core/core.module';
import { of } from 'rxjs';

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

    describe('YES button', () => {
      it('should exist', () => {
        expect(fixture.debugElement.query(By.css('button.btn-yes'))).not.toBeNull();
      });
  
      it('should cast positive CoposVote when clicking', () => {
        const name = "test-movie-name";
        component.name.setValue(name);
        
        spyOn(votingService, 'castCoposVote').and.returnValue(of({}));
  
        fixture.debugElement.query(By.css('button.btn-yes')).nativeElement.click();
  
        expect(votingService.castCoposVote).toHaveBeenCalledWith(name, true);
      });
    });

    describe('NO button', () => {
      it('should have a NO button', () => {
        expect(fixture.debugElement.query(By.css('button.btn-no'))).not.toBeNull();
      });
  
      it('should generate a negative CoposVote when clicking the button', () => {
        const name = "test-movie-name";
        component.name.setValue(name);
        
        spyOn(votingService, 'castCoposVote').and.returnValue(of({}));
  
        fixture.debugElement.query(By.css('button.btn-no')).nativeElement.click();
  
        expect(votingService.castCoposVote).toHaveBeenCalledWith(name, false);
      });      
    });
  });
});
