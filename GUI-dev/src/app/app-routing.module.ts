import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AuthGuard } from './auth-guard.service';

import {
  EbAuthComponent, EbLoginComponent, EbRegisterComponent, EbLogoutComponent,
} from './@theme/components/auth';
import { EbTacComponent } from './@theme/components/tac/tac.component';

const routes: Routes = [
  { path: '',
    loadChildren: 'app/pages/pages.module#PagesModule',
    // canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: EbAuthComponent,
    children: [
      {
        path: '',
        component: EbLoginComponent,
      },
      {
        path: 'login',
        component: EbLoginComponent,
      },
      {
        path: 'register',
        component: EbRegisterComponent,
      },
      {
        path: 'logout',
        component: EbLogoutComponent,
      },
    ],
  },
  {
    path: 'tac',
    component: EbTacComponent,
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
