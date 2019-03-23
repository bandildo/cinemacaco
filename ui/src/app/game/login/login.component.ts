import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private firebaseAuth: AngularFireAuth, private authService: AuthService) {}

  ngOnInit() {
    from(this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )).subscribe((response) => {
        this.authService.loginUser(response.user);
        // check if already registered in database
        // add if not
      });
  }
}
