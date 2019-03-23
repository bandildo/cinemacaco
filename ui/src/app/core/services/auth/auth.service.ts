import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  isAuthenticated(): Observable<boolean> {
    return of(true);
  }

  setPrincipal(teste: firebase.User) {}

  loginUser(teste: firebase.User) {}
}
