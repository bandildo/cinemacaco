import { CurrentGameResolver } from './resolvers/current-game.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game/game.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './services/user/user.service';
import { VoteService } from './services/vote/vote.service';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    GameService,
    VoteService,
    UserService,
    CurrentGameResolver
  ]
})
export class CoreModule { }
