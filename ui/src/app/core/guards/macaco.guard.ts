import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MacacoGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return of(true);
    // return this.authService.isMacaco();
  }
}
