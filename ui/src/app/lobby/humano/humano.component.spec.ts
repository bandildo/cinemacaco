import { CoreModule } from 'src/app/core/core.module';
import { LobbyModule } from './../lobby.module';
import { Vote } from 'src/app/core/voting/vote.model';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanoComponent } from './humano.component';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, of } from 'rxjs';

describe('HumanoComponent', () => {
  let component: HumanoComponent;
  let fixture: ComponentFixture<HumanoComponent>;

  const data = {
    currentGame: {} as Vote
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, LobbyModule, CoreModule],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
