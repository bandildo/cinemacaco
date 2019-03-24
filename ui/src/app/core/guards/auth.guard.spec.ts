
import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from '../services/auth/auth.service';
import { CoreModule } from '../core.module';
import { of } from 'rxjs';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { AuthGuard } from './auth.guard';

describe('Admin Guard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, FirebaseStubsModule]
    });
  });

  beforeEach(inject(
    [AuthGuard, AuthService],
    (injectedAuthGuard, injectedAuthService) => {
      guard = injectedAuthGuard;
      authService = injectedAuthService;
    }
  ));

  it('should activate when user authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(of(true));

    guard.canActivate().subscribe(activation => expect(activation).toBeTruthy());
  });

  it('should NOT activate when user NOT authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(of(false));

    guard.canActivate().subscribe(activation => expect(activation).toBeFalsy());
  });
});
