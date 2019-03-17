import { CoreModule } from 'src/app/core/core.module';
import { VotingService } from 'src/app/core/voting/voting.service';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VotingButtonsComponent } from './voting-buttons.component';
import { of } from 'rxjs';

describe('VotingButtonsComponent', () => {
  let component: VotingButtonsComponent;
  let fixture: ComponentFixture<VotingButtonsComponent>;

  let votingService: VotingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotingButtonsComponent],
      imports: [CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject([VotingService], injectedVotingService => {
    votingService = injectedVotingService;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Voting buttons', () => {
    describe('YES button', () => {
      it('should exist', () => {
        expect(
          fixture.debugElement.query(By.css('button.btn-yes'))
        ).not.toBeNull();
      });

      it('should cast positive MacacoVote when clicking', () => {
        const name = 'test-movie-name';
        component.gameName = name;
        component.isMacaco = true;

        spyOn(votingService, 'castVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-yes'))
          .nativeElement.click();

        expect(votingService.castVote).toHaveBeenCalledWith(name, true, true);
      });
    });

    describe('NO button', () => {
      it('should have a NO button', () => {
        expect(
          fixture.debugElement.query(By.css('button.btn-no'))
        ).not.toBeNull();
      });

      it('should generate a negative MacacoVote when clicking the button', () => {
        const name = 'test-movie-name';
        component.gameName = name;
        component.isMacaco = true;

        spyOn(votingService, 'castVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-no'))
          .nativeElement.click();

        expect(votingService.castVote).toHaveBeenCalledWith(name, false, true);
      });
    });
  });
});
