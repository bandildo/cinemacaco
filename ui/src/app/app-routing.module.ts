import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './core/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: 'lobby',
    loadChildren: './lobby/lobby.module#LobbyModule',
  },
  {
    path: 'statistics',
    loadChildren: './statistics/statistics.module#StatisticsModule',
  },
  {
    path: '',
    component: MainMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
