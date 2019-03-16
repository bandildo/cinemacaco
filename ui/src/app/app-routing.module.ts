import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './core/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: 'lobby',
    loadChildren: './app/lobby/lobby.module#LobbyModule',
  },
  {
    path: 'statistics',
    loadChildren: './app/statistics/statistics.module#StatisticsModule',
  },
  {
    path: '',
    component: MainMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
