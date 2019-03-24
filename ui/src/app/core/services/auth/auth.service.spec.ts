import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CoreModule } from '../../core.module';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../../models/user.model';

describe('Auth Service', () => {
  let service: AuthService;
  let fireAuth: AngularFireAuth;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, FirebaseStubsModule]
    });
  });

  beforeEach(inject(
    [AngularFireAuth, AuthService, UserService],
    (injectedAngularFireAuth, injectedAuthService, injectedUserService) => {
      fireAuth = injectedAngularFireAuth;
      service = injectedAuthService;
      userService = injectedUserService;
    }
  ));

  it('Should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('is admin', () => {
    it('Should return false if user is NOT admin', () => {
      service.user = of({ admin: false } as User);

      service.isAdmin().subscribe(admin => expect(admin).toBeFalsy());
    });

    it('Should return true if user is admin', () => {
      service.user = of({ admin: true } as User);

      service.isAdmin().subscribe(admin => expect(admin).toBeTruthy());
    });
  });

  describe('is authenticated', () => {
    it('Should return true if user is authenticated', () => {
      service.user = of({uid: 'user-uid'} as User);

      service.isAuthenticated().subscribe(authenticated => expect(authenticated).toBeTruthy());
    });

    it('Should return false if user is NOT authenticated', () => {
      service.user = of({} as User);

      service.isAuthenticated().subscribe(authenticated => expect(authenticated).toBeFalsy());
    });

  });

  it('should log in with google', () => {
    const expectedUser = { uid: 'user-uid', email: 'user@test.com' };

    spyOn(fireAuth.auth, 'signInWithPopup').and.returnValue(
      of({ user: expectedUser })
    );
    spyOn(userService, 'updateUser').and.returnValue(of({}));

    service.googleLogin();

    expect(fireAuth.auth.signInWithPopup).toHaveBeenCalled();

    service.user.subscribe(user => {
      expect(user.email).toEqual(expectedUser.email);
      expect(user.uid).toEqual(expectedUser.uid);
    });

    expect(userService.updateUser).toHaveBeenCalledWith(expectedUser);
  });
});
