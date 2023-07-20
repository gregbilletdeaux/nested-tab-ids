import { Routes } from '@angular/router';

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
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/message/0',
    pathMatch: 'full',
  },
];
