/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { AuthService } from '../services/auth/auth.service';
import { CoreModule } from '../core.module';
import { of } from 'rxjs';

describe('Admin Guard', () => {
  let guard: AdminGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
    });
  });

  beforeEach(inject(
    [AdminGuard, AuthService],
    (injectedAdminGuard, injectedAuthService) => {
      guard = injectedAdminGuard;
      authService = injectedAuthService;
    }
  ));

  it('Should create service', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate route when logged in', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(of(true));

    guard.canActivate().subscribe(activation => expect(activation).toBeTruthy());
  });
});
