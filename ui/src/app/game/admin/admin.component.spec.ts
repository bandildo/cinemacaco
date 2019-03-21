import { CoreModule } from 'src/app/core/core.module';
import { GameService } from 'src/app/game/services/game.service';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import GameUtils from 'src/app/utils/game.utils';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  let gameService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CoreModule],
      declarations: [AdminComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([GameService], injectedVotingService => {
    gameService = injectedVotingService;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Game name input text field', () => {
    it('should exist', () => {
      expect(
        fixture.debugElement.query(By.css('#gameNameInput'))
      ).not.toBeNull();
    });
  });

  describe('Start game button', () => {
    it('should exist', () => {
      expect(
        fixture.debugElement.query(By.css('button[data-action="game:start"]'))
      ).not.toBeNull();
    });

    it('should ask game service to start a game', () => {
      const game = GameUtils.getTestGame();

      component.name.setValue(game.name);
      jasmine.clock().mockDate(game.timestamp);

      spyOn(gameService, 'startGame').and.returnValue(of({}));

      fixture.debugElement
        .query(By.css('button[data-action="game:start"]'))
        .nativeElement.click();

      expect(gameService.startGame).toHaveBeenCalledWith(jasmine.any(String), game.name, game.timestamp);
    });
  });

  describe('End game button', () => {
    it('should ask game service to end the game', () => {
      spyOn(gameService, 'deleteCurrentGame').and.returnValue(of({}));
      spyOn(gameService, 'deleteCurrentHumanVotes').and.returnValue(of({}));
      spyOn(gameService, 'deleteCurrentMacacoVote').and.returnValue(of({}));

      fixture.debugElement
        .query(By.css('button[data-action="game:end"]'))
        .nativeElement.click();

      expect(gameService.deleteCurrentGame).toHaveBeenCalled();
      expect(gameService.deleteCurrentHumanVotes).toHaveBeenCalled();
      expect(gameService.deleteCurrentMacacoVote).toHaveBeenCalled();
    });
  });
  
});
