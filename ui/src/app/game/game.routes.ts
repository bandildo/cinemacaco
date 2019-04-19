import { AdminComponent } from './admin/admin.component';
import { CurrentGameResolver } from './../core/resolvers/current-game.resolver';
import { VoteComponent } from './vote/vote.component';

export const gameRoutes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AdminGuard, AuthGuard]
  },
  {
    path: 'vote',
    component: VoteComponent,
    resolve: { currentGame: CurrentGameResolver },
    // canActivate: [AuthGuard]
  }
];
