import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { NbAccessChecker } from "@nebular/security";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',

  template: `
  
  <nb-layout-header fixed>
    <nb-user [name]="user?.name" [picture]="user?.picture"></nb-user>
    but
    <button *nbIsGranted="['create', 'comments']">post comment</button>
    why
  </nb-layout-header>  
  `



})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user = {};

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService,
              public accessChecker: NbAccessChecker) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
       if (token.isValid()) {
         this.user = token.getPayload();
       }
      })

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
