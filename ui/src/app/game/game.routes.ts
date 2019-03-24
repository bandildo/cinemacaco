import { AdminComponent } from './admin/admin.component';
import { CurrentGameResolver } from './../core/resolvers/current-game.resolver';
import { MacacoComponent } from './macaco/macaco.component';
import { HumanoComponent } from './humano/humano.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';

export const gameRoutes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path: 'macaco',
    component: MacacoComponent,
    resolve: { currentGame: CurrentGameResolver },
    canActivate: [AuthGuard]
  },
  {
    path: 'humano',
    component: HumanoComponent,
    resolve: { currentGame: CurrentGameResolver },
    canActivate: [AuthGuard]
  }
];
