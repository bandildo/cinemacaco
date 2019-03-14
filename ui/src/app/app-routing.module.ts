import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CoposComponent } from './copos/copos.component';
import { NotCoposComponent } from './not-copos/not-copos.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: 'copos',
    component: CoposComponent
  },
  {
    path: 'notCopos',
    component: NotCoposComponent
  },
  {
    path: 'results',
    component: ResultsComponent
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
