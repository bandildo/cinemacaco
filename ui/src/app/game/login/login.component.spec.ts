import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FirebaseStubsModule } from 'src/app/firebase-stubs/firebase-stubs.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import * as firebase from 'firebase';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let fireAuth: AngularFireAuth;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FirebaseStubsModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(inject(
    [AngularFireAuth, AuthService],
    (injectedAngularFireAuth, injectedAuthService) => {
      fireAuth = injectedAngularFireAuth;
      authService = injectedAuthService;
    }
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should prompt to log-in and set principal when entering page', () => {
    const testUser = { user: {} };

    spyOn(fireAuth.auth, 'signInWithPopup').and.returnValue(of(testUser));
    spyOn(authService, 'loginUser');

    fixture.detectChanges();

    expect(fireAuth.auth.signInWithPopup).toHaveBeenCalledWith(
      new firebase.auth.GoogleAuthProvider()
    );
    expect(authService.loginUser).toHaveBeenCalledWith(testUser.user);
  });
});
