import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }
}