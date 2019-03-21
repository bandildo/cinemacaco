import { GameService } from '../../game/services/game.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreModule } from './../core.module';
import { CurrentGameResolver } from './current-game.resolver';
import { async, TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import GameUtils from 'src/app/utils/game.utils';

describe('CurrentGameResolver', () => {
  let resolver: CurrentGameResolver;
  let votingService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [CurrentGameResolver]
    }).compileComponents();
  }));

  beforeEach(inject(
    [CurrentGameResolver, GameService],
    (injectedResolver, injectedVotingService) => {
      resolver = injectedResolver;
      votingService = injectedVotingService;
    }
  ));

  describe('CurrentGameResolver', () => {
    it('should resolve current game when found', () => {
      const expectedGame = GameUtils.getTestGame();
      const expectedGameFirestore = GameUtils.toGameFirestore(expectedGame);

      spyOn(votingService, 'getCurrentGame').and.returnValue(
        of(expectedGameFirestore)
      );

      resolver.resolve().subscribe(currentGame => {
        expect(currentGame).toEqual(expectedGame);
      });
    });
  });
});
