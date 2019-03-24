import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, from } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(
    private fireAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  isAdmin(): Observable<boolean> {
    return this.user.pipe(map(user => user.admin));
  }

  googleLogin(): any {
    this.login(new firebase.auth.GoogleAuthProvider());
  }

  private login(provider: firebase.auth.AuthProvider) {
    from(this.fireAuth.auth.signInWithPopup(provider)).subscribe(credential => {
      const user = {
        uid: credential.user.uid,
        email: credential.user.email,
        admin: false
      } as User;

      this.user = of(user);

      this.userService.updateUser(user).subscribe();
    });
  }
}
