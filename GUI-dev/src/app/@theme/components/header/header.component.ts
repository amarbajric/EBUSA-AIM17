import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbAccessChecker } from '@nebular/security';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',


})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user = {};

  userMenu = [
    { title: 'Profile', data: 'user-details', link: '/user-details' },
    { title: 'Log out', data: 'logout', link: '/auth/logout' },
    ];

  authenticated = false;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService,
              public accessChecker: NbAccessChecker,
              ) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
       if (token.isValid()) {
         this.user = token.getPayload();
         this.authenticated = true;
       } else {
         this.authenticated = false;
       }
      })

  }

  ngOnInit() {
    this.menuService.onItemClick().subscribe(( event ) => {
      this.onItemSelection(event.item.data);
    })
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

  onItemSelection(item) {
    switch (item) {
      case 'logout': { this.authService.logout('email'); break }
      case 'profile': { break }
      default: break
    }
  }


}
