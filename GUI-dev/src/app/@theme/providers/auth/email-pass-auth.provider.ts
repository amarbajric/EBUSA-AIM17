/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

import { NbAuthResult } from '@nebular/auth';
import { NbEmailPassAuthProvider } from '@nebular/auth';

@Injectable()
export class EbEmailPassAuthProvider extends NbEmailPassAuthProvider {

  register(data?: any): Observable<NbAuthResult> {
    const method = this.getConfigValue('register.method');
    const url = this.getActionEndpoint('register');
    return this.http.request(method, url, {body: data, observe: 'response'})
      .pipe(
        map((res) => {
          if (this.getConfigValue('register.alwaysFail')) {
            throw this.createFailResponse(data);
          }

          return res;
        }),
        // this.validateToken('register'),
        map((res) => {
          return new NbAuthResult(
            true,
            res,
            this.getConfigValue('register.redirect.success'),
            [],
            this.getConfigValue('messages.getter')('register', res));
            // this.getConfigValue('token.getter')('register', res));
        }),
        catchError((res) => {
          let errors = [];
          if (res instanceof HttpErrorResponse) {
            errors = this.getConfigValue('errors.getter')('register', res);
          } else {
            errors.push('Something went wrong.');
          }

          return observableOf(
            new NbAuthResult(
              false,
              res,
              this.getConfigValue('register.redirect.failure'),
              errors,
            ));
        }),
      );
  }
}
