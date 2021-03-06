import { TestBed, inject } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { AuthService } from '../services/auth/auth.service';
import { CoreModule } from '../core.module';
import { of } from 'rxjs';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';

describe('Admin Guard', () => {
  let guard: AdminGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, FirebaseStubsModule]
    });
  });

  beforeEach(inject(
    [AdminGuard, AuthService],
    (injectedAdminGuard, injectedAuthService) => {
      guard = injectedAdminGuard;
      authService = injectedAuthService;
    }
  ));

  it('should activate when user is admin', () => {
    spyOn(authService, 'isAdmin').and.returnValue(of(true));

    guard.canActivate().subscribe(activation => expect(activation).toBeTruthy());
  });

  it('should NOT activate when user is NOT admin', () => {
    spyOn(authService, 'isAdmin').and.returnValue(of(false));

    guard.canActivate().subscribe(activation => expect(activation).toBeFalsy());
  });
});
