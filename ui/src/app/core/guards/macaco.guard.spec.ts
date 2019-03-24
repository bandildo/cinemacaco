import { TestBed, inject } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { AuthService } from '../services/auth/auth.service';
import { CoreModule } from '../core.module';
import { of } from 'rxjs';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { MacacoGuard } from './macaco.guard';

describe('Macaco Guard', () => {
  let guard: MacacoGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, FirebaseStubsModule]
    });
  });

  beforeEach(inject(
    [MacacoGuard, AuthService],
    (injectedMacacoGuard, injectedAuthService) => {
      guard = injectedMacacoGuard;
      authService = injectedAuthService;
    }
  ));

  it('should activate when user is macaco', () => {
    spyOn(authService, 'isMacaco').and.returnValue(of(true));

    guard.canActivate().subscribe(activation => expect(activation).toBeTruthy());
  });

  it('should NOT activate when user is NOT macaco', () => {
    spyOn(authService, 'isMacaco').and.returnValue(of(false));

    guard.canActivate().subscribe(activation => expect(activation).toBeFalsy());
  });
});
