import { CurrentGameResolver } from './../core/resolvers/current-game.resolver';
import { MacacoComponent } from './macaco/macaco.component';
import { HumanoComponent } from './humano/humano.component';

export const lobbyRoutes = [
  {
    path: 'macaco',
    component: MacacoComponent
  },
  {
    path: 'humano',
    component: HumanoComponent,
    resolve: { currentGame: CurrentGameResolver }
  }
];
