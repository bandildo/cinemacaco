import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './game/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
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
