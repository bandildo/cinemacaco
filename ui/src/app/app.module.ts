import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsModule } from './statistics/statistics.module';
import { LobbyModule } from './lobby/lobby.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    LobbyModule,
    StatisticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
