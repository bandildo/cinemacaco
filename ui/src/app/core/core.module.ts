import { CurrentGameResolver } from './resolvers/current-game.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game/game.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFirestoreModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    GameService,
    CurrentGameResolver
  ]
})
export class CoreModule { }
