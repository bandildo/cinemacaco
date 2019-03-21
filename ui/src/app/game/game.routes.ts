import { AdminComponent } from './admin/admin.component';
import { CurrentGameResolver } from './../core/resolvers/current-game.resolver';
import { MacacoComponent } from './macaco/macaco.component';
import { HumanoComponent } from './humano/humano.component';

export const gameRoutes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'macaco',
    component: MacacoComponent,
    resolve: { currentGame: CurrentGameResolver }
  },
  {
    path: 'humano',
    component: HumanoComponent,
    resolve: { currentGame: CurrentGameResolver }
  }
];
