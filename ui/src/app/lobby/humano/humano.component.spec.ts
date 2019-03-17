import { MacacoVote } from 'src/app/core/voting/macaco-vote.model';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanoComponent } from './humano.component';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, of } from 'rxjs';

describe('HumanoComponent', () => {
  let component: HumanoComponent;
  let fixture: ComponentFixture<HumanoComponent>;

  const data = {
    currentGame: {} as MacacoVote
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HumanoComponent],
      imports: [RouterTestingModule],
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
