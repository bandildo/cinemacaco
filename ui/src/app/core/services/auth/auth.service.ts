import { Injectable } from '@angular/core';
import { Observable, from, ReplaySubject } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import UserUtils from 'src/app/utils/user.utils';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  private cachedUser = new ReplaySubject<User>(1);

  constructor(
    private fireAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  get user(): Observable<User> {
    return this.cachedUser.asObservable();
  }

  setCachedUser(user: User) {
    this.cachedUser.next(user);
  }

  isAdmin(): Observable<boolean> {
    return this.user.pipe(map(user => user.admin));
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.pipe(map(user => !!user.uid));
  }

  isMacaco(): Observable<boolean> {
    return this.user.pipe(map(user => user.macaco));
  }

  googleLogin() {
    this.login(new firebase.auth.GoogleAuthProvider());
  }

  private login(provider: firebase.auth.AuthProvider) {
    from(this.fireAuth.auth.signInWithPopup(provider)).subscribe(credential => {
      const user = this.generateNewUser(credential);
      this.getAndUpdateCache(user);
    });
  }

  private getAndUpdateCache(user: User) {
    this.userService.getUser(user.uid).subscribe(
      gotUser => {
        this.cachedUser.next(UserUtils.toUser(gotUser));
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.userService.createUser(user).subscribe(createdUser => {
            this.cachedUser.next(UserUtils.toUser(createdUser));
          });
        }
      }
    );
  }

  generateNewUser(credential: firebase.auth.UserCredential){
    return {
      uid: credential.user.uid,
      email: credential.user.email,
      admin: false,
      macaco: false
    } as User;
  }
}
