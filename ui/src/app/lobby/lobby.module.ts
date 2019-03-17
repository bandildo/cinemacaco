import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { lobbyRoutes } from './lobby.routes';
import { MacacoComponent } from './macaco/macaco.component';
import { HumanoComponent } from './humano/humano.component';

@NgModule({
  declarations: [MacacoComponent, HumanoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(lobbyRoutes)
  ]
})
export class LobbyModule {}
