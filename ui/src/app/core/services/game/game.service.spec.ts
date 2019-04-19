import { GameService } from './game.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import GameUtils from 'src/app/utils/game.utils';
import UrlUtils from 'src/app/utils/url.utils';

describe('Game Service', () => {
  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController, GameService],
    (httpTestingController, injectedGameService) => {
      httpMock = httpTestingController;
      service = injectedGameService;
    }
  ));

  describe('POST', () => {
    it('Should start new game', () => {
      const game = GameUtils.getTestGame();

      service.startNewGame(game).subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(UrlUtils.generateDbUrl('/games'));
      expect(call.request.method).toEqual('POST');
    });
  });

  describe('GET', () => {
    it('should return the active game', () => {
      const expectedGame = GameUtils.getTestGame();

      service.getActiveGame().subscribe(response => {
        expect(response).toEqual(expectedGame);
      });

      const call = httpMock.expectOne(UrlUtils.generateDbUrl('/games/active'));
      expect(call.request.method).toEqual('GET');
      call.flush(expectedGame);
    });
  });

  describe('DELETE', () => {
    it('Should deactivate the active game', () => {
      service.endActiveGame().subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(UrlUtils.generateDbUrl('/games/active'));
      expect(call.request.method).toEqual('DELETE');
    });
  });
});
