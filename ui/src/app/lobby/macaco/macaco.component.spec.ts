import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MacacoComponent } from './macaco.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MacacoVote } from 'src/app/core/voting/macaco-vote.model';
import { VotingService } from 'src/app/core/voting/voting.service';
import { CoreModule } from 'src/app/core/core.module';
import { of } from 'rxjs';

describe('MacacoComponent', () => {
  let component: MacacoComponent;
  let fixture: ComponentFixture<MacacoComponent>;

  let votingService: VotingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MacacoComponent
      ],
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
    fixture = TestBed.createComponent(MacacoComponent);
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
  
      it('should cast positive MacacoVote when clicking', () => {
        const name = "test-movie-name";
        component.name.setValue(name);
        
        spyOn(votingService, 'castMacacoVote').and.returnValue(of({}));
  
        fixture.debugElement.query(By.css('button.btn-yes')).nativeElement.click();
  
        expect(votingService.castMacacoVote).toHaveBeenCalledWith(name, true);
      });
    });

    describe('NO button', () => {
      it('should have a NO button', () => {
        expect(fixture.debugElement.query(By.css('button.btn-no'))).not.toBeNull();
      });
  
      it('should generate a negative MacacoVote when clicking the button', () => {
        const name = "test-movie-name";
        component.name.setValue(name);
        
        spyOn(votingService, 'castMacacoVote').and.returnValue(of({}));
  
        fixture.debugElement.query(By.css('button.btn-no')).nativeElement.click();
  
        expect(votingService.castMacacoVote).toHaveBeenCalledWith(name, false);
      });      
    });
  });
});
