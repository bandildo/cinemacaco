import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoposComponent } from './copos.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('CoposComponent', () => {
  let component: CoposComponent;
  let fixture: ComponentFixture<CoposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoposComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Game name input text field', () => {
    it('should exist', () => {
      expect(fixture.debugElement.query(By.css('#gameNameInput'))).not.toBeNull();
    });
  });

  describe('Voting buttons', () => {
    it('should have a YES button', () => {
      expect(fixture.debugElement.query(By.css('button.btn-yes'))).not.toBeNull();
    });

    it('should have a NO button', () => {
      expect(fixture.debugElement.query(By.css('button.btn-no'))).not.toBeNull();
    });
  });
});
