import { VotingButtonsComponent } from './voting-buttons/voting-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { lobbyRoutes } from './lobby.routes';
import { MacacoComponent } from './macaco/macaco.component';
import { HumanoComponent } from './humano/humano.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    HumanoComponent,
    MacacoComponent,
    VotingButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(lobbyRoutes)
  ]
})
export class LobbyModule {}
