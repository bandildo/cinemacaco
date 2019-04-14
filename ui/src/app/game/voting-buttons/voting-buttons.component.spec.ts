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
import { User } from 'firebase';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';

describe('VotingButtonsComponent', () => {
  let component: VotingButtonsComponent;
  let fixture: ComponentFixture<VotingButtonsComponent>;

  let gameService: GameService;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotingButtonsComponent],
      imports: [CoreModule, FirebaseStubsModule]
    }).compileComponents();
  }));

  beforeEach(inject([GameService, AuthService], (injectedGameService, injectedAuthService) => {
    gameService = injectedGameService;
    authService = injectedAuthService;
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
        component.isMacaco = true;

        spyOn(gameService, 'castMacacoVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-yes'))
          .nativeElement.click();

        expect(gameService.castMacacoVote).toHaveBeenCalledWith(true);
      });

      it('should cast positive human vote when clicking as human', () => {
        component.isMacaco = false;
        const uid = 'test-user-id';

        spyOn(gameService, 'castHumanVote').and.returnValue(of({}));
        spyOnProperty(authService, 'user', 'get').and.returnValue(of({ uid } as User));

        fixture.debugElement
          .query(By.css('button.btn-yes'))
          .nativeElement.click();

        expect(gameService.castHumanVote).toHaveBeenCalledWith(uid, true);
      });
    });

    describe('NO button', () => {
      it('should have a NO button', () => {
        expect(
          fixture.debugElement.query(By.css('button.btn-no'))
        ).not.toBeNull();
      });

      it('should generate a negative macaco vote when clicking as macaco', () => {
        component.isMacaco = true;

        spyOn(gameService, 'castMacacoVote').and.returnValue(of({}));

        fixture.debugElement
          .query(By.css('button.btn-no'))
          .nativeElement.click();

        expect(gameService.castMacacoVote).toHaveBeenCalledWith(false);
      });

      it('should generate a negative human vote when clicking as human', () => {
        component.isMacaco = false;
        const uid = 'test-user-id';


        spyOn(gameService, 'castHumanVote').and.returnValue(of({}));
        spyOnProperty(authService, 'user', 'get').and.returnValue(of({ uid } as User));

        fixture.debugElement
          .query(By.css('button.btn-no'))
          .nativeElement.click();

        expect(gameService.castHumanVote).toHaveBeenCalledWith(uid, false);
      });
    });
  });
});
