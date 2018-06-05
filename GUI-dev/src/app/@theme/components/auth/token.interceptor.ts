import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: NbAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.getToken()
      .pipe(
        switchMap((token: NbAuthJWTToken) => {
          if (token.isValid()) {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token.getValue()}`,
              },
            })
          }
          return next.handle(request)
        }),
      );
  }
}
