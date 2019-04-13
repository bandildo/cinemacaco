import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return of(true);
    // return this.authService.isAdmin();
  }
}
