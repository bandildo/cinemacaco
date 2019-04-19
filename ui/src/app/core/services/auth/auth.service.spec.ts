import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CoreModule } from '../../core.module';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { of, throwError } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../../models/user.model';
import UserUtils from 'src/app/utils/user.utils';

describe('Auth Service', () => {
  let service: AuthService;
  let fireAuth: AngularFireAuth;
  let userService: UserService;

  let expectedUser: User;

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
      service.setCachedUser({ admin: false } as User);

      service.isAdmin().subscribe(admin => expect(admin).toBeFalsy());
    });

    it('Should return true if user is admin', () => {
      service.setCachedUser({ admin: true } as User);

      service.isAdmin().subscribe(admin => expect(admin).toBeTruthy());
    });
  });

  describe('is authenticated', () => {
    it('Should return true if user is authenticated', () => {
      service.setCachedUser({ id: 'user-uid' } as User);

      service
        .isAuthenticated()
        .subscribe(authenticated => expect(authenticated).toBeTruthy());
    });

    it('Should return false if user is NOT authenticated', () => {
      service.setCachedUser({} as User);

      service
        .isAuthenticated()
        .subscribe(authenticated => expect(authenticated).toBeFalsy());
    });
  });

  describe('is macaco', () => {
    it('should return true if user is macaco', () => {
      service.setCachedUser({ macaco: true } as User);

      service.isMacaco().subscribe(macaco => expect(macaco).toBeTruthy());
    });

    it('should return false if user is NOT macaco', () => {
      service.setCachedUser({ macaco: false } as User);

      service.isMacaco().subscribe(macaco => expect(macaco).toBeFalsy());
    });
  });

  describe('user login', () => {
    it('should get the user when logging in', () => {
      expectedUser = UserUtils.getTestUser();

      spyOn(fireAuth.auth, 'signInWithPopup').and.returnValue(
        Promise.resolve({ user: UserUtils.getTestLoginCredential() })
      );
      spyOn(userService, 'getUser').and.returnValue(
        of(expectedUser)
      );
      spyOn(userService, 'createUser').and.returnValue(
        of({})
      );

      service.googleLogin();

      service.user.subscribe(user => expect(user).toEqual(expectedUser));

      expect(userService.createUser).not.toHaveBeenCalled();
    });

    it('should create the user when logging in and it doesnt exist yet', () => {
      const loginCredential = UserUtils.getTestLoginCredential();
      expectedUser = UserUtils.getTestUser();

      spyOn(fireAuth.auth, 'signInWithPopup').and.returnValue(
        of(loginCredential)
      );
      spyOn(userService, 'getUser').and.returnValue(
        throwError({ status: 404 })
      );
      spyOn(userService, 'createUser').and.returnValue(
        of(expectedUser)
      );

      service.googleLogin();

      service.user.subscribe(user => expect(user).toEqual(service.generateNewUser(loginCredential)));
    });
  });
});
