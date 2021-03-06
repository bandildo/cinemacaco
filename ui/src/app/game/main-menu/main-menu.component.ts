import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  constructor(private router: Router, private authService: AuthService) { }

  onResultsClick() {
    this.router.navigate(['results']);
  }

  onVoteClick() {
    this.router.navigate(['vote']);
  }

  onAdminClick() {
    this.router.navigate(['admin']);
  }

  onLoginClick() {
    this.authService.googleLogin();
  }
}
