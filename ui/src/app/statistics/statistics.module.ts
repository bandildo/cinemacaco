import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { RouterModule } from '@angular/router';
import { statisticsRoutes } from './statistics.routes';

@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(statisticsRoutes),
  ]
})
export class StatisticsModule { }
