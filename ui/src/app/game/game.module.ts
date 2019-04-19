import { VotingButtonsComponent } from './vote/voting-buttons/voting-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { gameRoutes } from './game.routes';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AdminComponent,
    VoteComponent,
    VotingButtonsComponent,
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(gameRoutes),
  ]
})
export class GameModule { }
