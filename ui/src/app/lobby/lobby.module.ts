import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoposComponent } from './copos/copos.component';
import { NotCoposComponent } from './not-copos/not-copos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { lobbyRoutes } from './lobby.routes';

@NgModule({
  declarations: [
    CoposComponent,
    NotCoposComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(lobbyRoutes)
  ]
})
export class LobbyModule { }
