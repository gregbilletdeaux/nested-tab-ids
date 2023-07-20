import { Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'message/:id',
        loadComponent: () =>
          import('./view-message/view-message.page').then(
            (m) => m.ViewMessagePage
          ),
        children: [
          {
            path: 'info/:unused',
            component: SimpleComponent,
          },
          {
            path: 'transactions/:unused',
            component: SimpleComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/message/0',
    pathMatch: 'full',
  },
];
