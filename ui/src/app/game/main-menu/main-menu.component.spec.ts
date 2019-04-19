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

  describe('Vote button', () => {
    it('should redirect to voting page', () => {
      spyOn(router, 'navigate');
      component.onVoteClick();
      expect(router.navigate).toHaveBeenCalledWith(['vote']);
    });
  });

  describe('Admin button', () => {
    it('should redirect to Admin page', () => {
      spyOn(router, 'navigate');
      component.onAdminClick();
      expect(router.navigate).toHaveBeenCalledWith(['admin']);
    });
  });

  describe('Login button', () => {
    it('should attempt to login with google', () => {
      spyOn(authService, 'googleLogin');

      component.onLoginClick();

      expect(authService.googleLogin).toHaveBeenCalled();
    });
  });

  describe('Results button', () => {
    it('should redirect to Results page', () => {
      spyOn(router, 'navigate');
      component.onResultsClick();
      expect(router.navigate).toHaveBeenCalledWith(['results']);
    });
  });

});
