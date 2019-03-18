import { CurrentGameResolver } from './resolvers/current-game.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameService } from './game/game.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainMenuComponent,
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
