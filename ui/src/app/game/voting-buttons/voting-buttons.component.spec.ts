import { CoreModule } from 'src/app/core/core.module';
import { GameService } from 'src/app/core/services/game/game.service';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VotingButtonsComponent } from './voting-buttons.component';
import { of } from 'rxjs';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from 'src/app/core/models/user.model';
import { VoteService } from 'src/app/core/services/vote/vote.service';

describe('VotingButtonsComponent', () => {
  let component: VotingButtonsComponent;
  let fixture: ComponentFixture<VotingButtonsComponent>;

  let voteService: VoteService;
  let authService: AuthService;

  const activeGameId = 'active-game-id';
  const user = { id: 'user-id' } as User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotingButtonsComponent],
      imports: [CoreModule, FirebaseStubsModule]
    }).compileComponents();
  }));

  beforeEach(inject([VoteService, AuthService], (injectedVoteService, injectedAuthService) => {
    voteService = injectedVoteService;
    authService = injectedAuthService;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingButtonsComponent);
    component = fixture.componentInstance;
    component.gameId = activeGameId;
    fixture.detectChanges();
  });

  describe('Voting buttons', () => {
    describe('YES button', () => {
      it('should exist', () => {
        expect(
          fixture.debugElement.query(By.css('button.btn-yes'))
        ).not.toBeNull();
      });

      it('should cast positive vote when', () => {
        spyOn(voteService, 'castVote').and.returnValue(of({}));
        spyOnProperty(authService, 'user').and.returnValue(of(user));

        fixture.debugElement
          .query(By.css('button.btn-yes'))
          .nativeElement.click();

        expect(voteService.castVote).toHaveBeenCalledWith(user.id, activeGameId, true);
      });
    });

    describe('NO button', () => {
      it('should have a NO button', () => {
        expect(
          fixture.debugElement.query(By.css('button.btn-no'))
        ).not.toBeNull();
      });

      it('should cast a negative vote when clicking', () => {
        spyOn(voteService, 'castVote').and.returnValue(of({}));
        spyOnProperty(authService, 'user').and.returnValue(of(user));

        fixture.debugElement
          .query(By.css('button.btn-no'))
          .nativeElement.click();

        expect(voteService.castVote).toHaveBeenCalledWith(user.id, activeGameId, false);
      });
    });
  });
});
