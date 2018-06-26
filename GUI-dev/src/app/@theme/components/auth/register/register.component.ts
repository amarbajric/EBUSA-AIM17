/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { NbAuthService } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth';
import {AsyncEmailValidatorProvider} from '../../../providers/async-email-validator/async-email-validator';
import {User} from '../../../../../models/models';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'ngx-eb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: 'register.component.html' ,
})
export class EbRegisterComponent {

  redirectDelay: number = 0;
  asyncEmail: Subject<string> = new Subject<string>();
  emailIsTaken: boolean;
  showMessages: any = {};
  provider: string = '';
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: User = new User();
  socialLinks: NbAuthSocialLink[] = [];

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected config = {},
              protected router: Router,
              protected route: ActivatedRoute,
              protected asyncEmailValidation: AsyncEmailValidatorProvider) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.provider = this.getConfigValue('forms.register.provider');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');

    this.asyncEmail
      .debounceTime(500) // wait 700ms after the last event before emitting last event
      .distinctUntilChanged() // only emit if value is different from previous value
      .subscribe(email => this.asyncEmailValidation.checkIfMailTaken(email).then(isTaken => {
        isTaken ? this.emailIsTaken = true : this.emailIsTaken = false;
      }));
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.provider, this.user).subscribe((result: NbAuthResult) => {
        this.submitted = false;
        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

  onMailChanged(event, emailErr) {
    !emailErr ? this.asyncEmail.next(event.target.value) : null;
  }
}
