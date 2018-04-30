import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AuthGuard } from './auth-guard.service';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import {
  EbAuthComponent, EbLoginComponent, EbRegisterComponent, EbLogoutComponent,
  EbRequestPasswordComponent, EbResetPasswordComponent
} from "./@theme/components/auth";

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
      {
        path: 'request-password',
        component: EbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: EbResetPasswordComponent,
      },
    ],
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
