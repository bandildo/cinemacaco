import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(inject(
    [
      Router,
    ],
    (
      injectedRouter,
    ) => {
      router = injectedRouter;
    }
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Copos button', () => {
    it('should exist', () => {
      expect(fixture.debugElement.query(By.css('button#coposButton.btn'))).not.toBeNull();
      expect(fixture.debugElement.query(By.css('button#coposButton.btn')).nativeElement.innerText).toContain('Copos');
    });
    
    it('should redirect to Copos page', () => {
      spyOn(router, 'navigate');
      component.onCoposClick();
      expect(router.navigate).toHaveBeenCalledWith(['copos']);
    });
  });

  describe('Not Copos button', () => {
    it('should exist', () => {
      expect(fixture.debugElement.query(By.css('button#notCoposButton.btn'))).not.toBeNull();
      expect(fixture.debugElement.query(By.css('button#notCoposButton.btn')).nativeElement.innerText).toContain('Not Copos');
    });

    it('should redirect to Not Copos page', () => {
      spyOn(router, 'navigate');
      component.onNotCoposClick();
      expect(router.navigate).toHaveBeenCalledWith(['notCopos']);
    });
  });

  describe('Results button', () => {
    it('should have a Results button', () => {
      expect(fixture.debugElement.query(By.css('button#resultsButton.btn'))).not.toBeNull();
      expect(fixture.debugElement.query(By.css('button#resultsButton.btn')).nativeElement.innerText).toContain('Results');
    });

    it('should redirect to Results page', () => {
      spyOn(router, 'navigate');
      component.onResultsClick();
      expect(router.navigate).toHaveBeenCalledWith(['results']);
    });
  });
});
