/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private titleService: Title) {

  }

  public setTitle( title: string) {
    const completeTitle = title ? 'EasyBiz | ' + title : 'EasyBiz';
    this.titleService.setTitle( completeTitle );
  }


  ngOnInit() {
    this.analytics.trackPageViews();
  }
}
