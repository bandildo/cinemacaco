import { CoreModule } from 'src/app/core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacacoComponent } from './macaco.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { defer, of } from 'rxjs';
import { Vote } from 'src/app/game/models/vote.model';
import { GameModule } from '../game.module';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';

describe('MacacoComponent', () => {
  let component: MacacoComponent;
  let fixture: ComponentFixture<MacacoComponent>;

  const data = {
    currentGame: {} as Vote
  };

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
    fixture = TestBed.createComponent(MacacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
