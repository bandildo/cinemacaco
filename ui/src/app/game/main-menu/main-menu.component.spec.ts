import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CoreModule } from 'src/app/core/core.module';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  let router: Router;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuComponent],
      imports: [RouterTestingModule, CoreModule, FirebaseStubsModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [AuthService, Router],
    (injectedAuthService, injectedRouter) => {
      router = injectedRouter;
      authService = injectedAuthService;
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

  describe('Macaco button', () => {
    it('should exist', () => {
      expect(
        fixture.debugElement.query(By.css('button#macacoButton.btn'))
      ).not.toBeNull();
      expect(
        fixture.debugElement.query(By.css('button#macacoButton.btn'))
          .nativeElement.innerText
      ).toContain('Macaco');
    });

    it('should redirect to Macaco page', () => {
      spyOn(router, 'navigate');
      component.onMacacoClick();
      expect(router.navigate).toHaveBeenCalledWith(['macaco']);
    });
  });

  describe('Humano button', () => {
    it('should exist', () => {
      expect(
        fixture.debugElement.query(By.css('button#humanoButton.btn'))
      ).not.toBeNull();
      expect(
        fixture.debugElement.query(By.css('button#humanoButton.btn'))
          .nativeElement.innerText
      ).toContain('Humano');
    });

    it('should redirect to Humano page', () => {
      spyOn(router, 'navigate');
      component.onHumanoClick();
      expect(router.navigate).toHaveBeenCalledWith(['humano']);
    });
  });

  describe('Admin button', () => {
    it('should have an Admin button', () => {
      expect(
        fixture.debugElement.query(By.css('button#adminButton.btn'))
      ).not.toBeNull();
      expect(
        fixture.debugElement.query(By.css('button#adminButton.btn'))
          .nativeElement.innerText
      ).toContain('Admin');
    });

    it('should redirect to Admin page', () => {
      spyOn(router, 'navigate');
      component.onAdminClick();
      expect(router.navigate).toHaveBeenCalledWith(['admin']);
    });
  });

  describe('Results button', () => {
    it('should have a Results button', () => {
      expect(
        fixture.debugElement.query(By.css('button#resultsButton.btn'))
      ).not.toBeNull();
      expect(
        fixture.debugElement.query(By.css('button#resultsButton.btn'))
          .nativeElement.innerText
      ).toContain('Results');
    });

    it('should redirect to Results page', () => {
      spyOn(router, 'navigate');
      component.onResultsClick();
      expect(router.navigate).toHaveBeenCalledWith(['results']);
    });
  });

  describe('Login button', () => {
    it('should have a Login button', () => {
      expect(
        fixture.debugElement.query(By.css('button#loginButton.btn'))
      ).not.toBeNull();
      expect(
        fixture.debugElement.query(By.css('button#loginButton.btn'))
          .nativeElement.innerText
      ).toContain('Login');
    });

    it('should attempt to login with google', () => {
      spyOn(authService, 'googleLogin');

      component.onLoginClick();

      expect(authService.googleLogin).toHaveBeenCalled();
    });
  });
});
