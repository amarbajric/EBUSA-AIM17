import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators/tap';
import {RoleProvider} from './role.provider';

@Injectable()
export class ApprovalAuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router, private roleProvider: RoleProvider) {
  }

  canActivate() {
    // only SYS_APPROVER are allowed to see approval page
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {

          this.roleProvider.getRole().subscribe((role) => {
            if (role === 'SYS_APPROVER') {
              // console.log('du bist approver');
            } else {
              // console.log('du hast keine Rechte dafür');
              this.router.navigate(['home']);
            }
          });
        }),
      );
  }
}
