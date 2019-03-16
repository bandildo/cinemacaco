import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCoposComponent } from './not-copos.component';

describe('NotCoposComponent', () => {
  let component: NotCoposComponent;
  let fixture: ComponentFixture<NotCoposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotCoposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotCoposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
