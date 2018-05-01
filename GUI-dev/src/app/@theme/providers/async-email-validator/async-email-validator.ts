import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfigProvider} from '../backend-server/serverconfig';
import {MailAsyncValidationRes} from '../../../../models/models';


@Injectable()
export class AsyncEmailValidatorProvider {

  constructor(public http: HttpClient, private serverConfig: ServerConfigProvider) {}


  checkIfMailTaken = (email: string): Promise<boolean> =>
    this.http.post<MailAsyncValidationRes>(this.serverConfig.checkIfMailTaken, {email: email}, {})
      .toPromise()
      .then(res => res.isTaken);
}
