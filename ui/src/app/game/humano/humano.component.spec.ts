import { CoreModule } from 'src/app/core/core.module';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanoComponent } from './humano.component';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, of } from 'rxjs';
import { GameModule } from '../game.module';
import { Game } from '../models/game.model';
import { By } from '@angular/platform-browser';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';

describe('HumanoComponent', () => {
  let component: HumanoComponent;
  let fixture: ComponentFixture<HumanoComponent>;

  let data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, GameModule, CoreModule, FirebaseStubsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: defer(() => of(data)),
            snapshot: {}
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanoComponent);
    component = fixture.componentInstance;
  });

  it('should display voting buttons if there is a game active', () => {
    data = {
      currentGame: {
        name: 'game-name',
        id: 'game-id'
      } as Game
    };

    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('app-voting-buttons'))
    ).toBeTruthy();
  });

  it('should display waiting if NO game is active', () => {
    data = {
      currentGame: null
    };

    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('app-voting-buttons'))
    ).toBeFalsy();

    expect(
      fixture.debugElement.query(By.css('h1'))
    ).toBeTruthy();
  });
});
