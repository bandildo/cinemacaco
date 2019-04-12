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
    it('Should post new game', () => {
      const game = GameUtils.getTestGame();

      service.startGame(game).subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(UrlUtils.generateDbUrl('/games/current'));
      expect(call.request.method).toEqual('POST');
    });

    it('should post a Macaco vote', () => {
      service.castMacacoVote(true).subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/games/vote/macaco')
      );
      expect(call.request.method).toEqual('POST');
    });

    it('should post a Human vote', () => {
      service.castHumanVote(true).subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(
        UrlUtils.generateDbUrl('/games/vote/human')
      );
      expect(call.request.method).toEqual('POST');
    });
  });

  describe('GET', () => {
    it('should get the current game', () => {
      const expectedGame = GameUtils.getTestGame();

      service.getCurrentGame().subscribe(response => {
        expect(response).toEqual(expectedGame);
      });

      const call = httpMock.expectOne(UrlUtils.generateDbUrl('/games/current'));
      expect(call.request.method).toEqual('GET');
      call.flush(expectedGame);
    });
  });

  describe('DELETE', () => {
    it('Should delete current game', () => {
      service.endCurrentGame().subscribe(() => { }, error => fail(error));

      const call = httpMock.expectOne(UrlUtils.generateDbUrl('/games/current'));
      expect(call.request.method).toEqual('DELETE');
    });
  });
});
