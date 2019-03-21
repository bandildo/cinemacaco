import { CoreModule } from 'src/app/core/core.module';
import { GameService } from 'src/app/game/services/game.service';
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

  let votingService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotingButtonsComponent],
      imports: [CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject([GameService], injectedVotingService => {
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

      it('should cast positive macaco vote when clicking as macaco', () => {
        // const gameId = 'game-id';
        // component.gameId = gameId;
        component.isMacaco = true;

        spyOn(votingService, 'castMacacoVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-yes'))
          .nativeElement.click();

        expect(votingService.castMacacoVote).toHaveBeenCalledWith(true);
      });

      it('should cast positive human vote when clicking as human', () => {
        // const gameId = 'game-id';
        // component.gameId = gameId;
        component.isMacaco = false;

        spyOn(votingService, 'castHumanVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-yes'))
          .nativeElement.click();

        expect(votingService.castHumanVote).toHaveBeenCalledWith(true);
      });
    });

    describe('NO button', () => {
      it('should have a NO button', () => {
        expect(
          fixture.debugElement.query(By.css('button.btn-no'))
        ).not.toBeNull();
      });

      it('should generate a negative macaco vote when clicking as macaco', () => {
        // const gameId = 'game-id';
        // component.gameId = gameId;
        component.isMacaco = true;

        spyOn(votingService, 'castMacacoVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-no'))
          .nativeElement.click();

        expect(votingService.castMacacoVote).toHaveBeenCalledWith(false);
      });

      it('should generate a negative human vote when clicking as human', () => {
        // const gameId = 'game-id';
        // component.gameId = gameId;
        component.isMacaco = false;

        spyOn(votingService, 'castHumanVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-no'))
          .nativeElement.click();

        expect(votingService.castHumanVote).toHaveBeenCalledWith(false);
      });
    });
  });
});
