import { Injectable } from '@angular/core';
import { Observable, of, from, EMPTY, ReplaySubject } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import UserUtils from 'src/app/utils/user.utils';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  user: Observable<User>;
  // user = new ReplaySubject<User>(1);

  constructor(
    private fireAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  isAdmin(): Observable<boolean> {
    return this.user.pipe(map(user => user.admin));
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.pipe(map(user => !!user.uid));
  }

  googleLogin() {
    this.user = this.login(new firebase.auth.GoogleAuthProvider());
  }

  private login(provider: firebase.auth.AuthProvider): Observable<User> {
    from(this.fireAuth.auth.signInWithPopup(provider)).pipe(
      tap(credential => {
        const user = {
          uid: credential.user.uid,
          email: credential.user.email,
          admin: false
        } as User;

        this.userService.getUser(user.uid).subscribe(
          gotUser => {
            return of(UserUtils.toUser(gotUser));
          },
          (error: HttpErrorResponse) => {
            if (error.status === 404) {
              this.userService.createUser(user).subscribe(createdUser => {
                return of(UserUtils.toUser(createdUser));
              });
            }
          }
        );
      })
    );
    return EMPTY;
  }
}
