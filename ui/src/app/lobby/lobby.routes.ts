import { CoposComponent } from './copos/copos.component';
import { NotCoposComponent } from './not-copos/not-copos.component';

export const lobbyRoutes = [
    {
        path: 'copos',
        component: CoposComponent
      },
      {
        path: 'notCopos',
        component: NotCoposComponent
      },
]