import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators/tap';
import {GatewayProvider} from './@theme/providers/backend-server/gateway';

@Injectable()
export class ApprovalAuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router, private gateway: GatewayProvider) {
  }

  canActivate() {
    // only SYS_APPROVER are allowed to see approval page
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {

          this.gateway.getUser().then((user) => {
            if (user.roles.find(role => role.name === 'SYS_APPROVER') === undefined) {
              this.router.navigate(['home']);
            }
          });
        }),
      );
  }
}
