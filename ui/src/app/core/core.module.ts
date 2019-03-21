import { CurrentGameResolver } from './resolvers/current-game.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game/services/game.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    GameService,
    CurrentGameResolver
  
  ]
})
export class CoreModule { }
