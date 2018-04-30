/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NB_AUTH_TOKEN_CLASS, NbAuthJWTToken, NbAuthModule, NbEmailPassAuthProvider} from '@nebular/auth';
import {NbRoleProvider, NbSecurityModule} from '@nebular/security';

import {RoleProvider} from './role.provider';
import {AuthGuard} from './auth-guard.service';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            // baseEndpoint: 'http://localhost:10000',
            login: {
              endpoint: 'http://localhost:10000/user/login',
              redirect: {
                success: 'dashboard',
              },
            },
            logout: {
              endpoint: '',
            },
            register: {
              endpoint: '/user/register',
            },
            token: {
              key: 'token',
            },
            validation: {

            },
          },
        },
      },
    }),

    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['news', 'comments'],
        },
        user: {
          parent: 'guest',
          view: 'user',
          create: 'comments',
        },
        moderator: {
          parent: 'user',
          create: 'news',
          remove: '*',
        },
        Employee: {
          parent: 'moderator',
        },
      },
    }),

  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
    { provide: NbRoleProvider, useClass: RoleProvider },
  ],
})
export class AppModule {
}
