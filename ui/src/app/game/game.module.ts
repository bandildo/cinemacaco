import { VotingButtonsComponent } from './voting-buttons/voting-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MacacoComponent } from './macaco/macaco.component';
import { HumanoComponent } from './humano/humano.component';
import { AdminComponent } from './admin/admin.component';
import { gameRoutes } from './game.routes';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameService } from '../core/services/game/game.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AdminComponent,
    HumanoComponent,
    MacacoComponent,
    VotingButtonsComponent,
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(gameRoutes),
  ]
})
export class GameModule {}
