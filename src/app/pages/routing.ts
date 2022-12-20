import { Routes } from '@angular/router';
import { LookupsComponent } from './lookups/lookups.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'user-management',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'lookups',
    loadChildren: () => import('./lookups/lookups.module').then((m) => m.LookupsModule)
  },
  {
    path: 'insight',
    loadChildren: () => import('./insights/insights.module').then((m) => m.InsightsModule)
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('./workflow/workflow.module').then((m) => m.WorkflowModule),

  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
