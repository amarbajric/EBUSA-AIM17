import { Injectable } from '@angular/core';


@Injectable()
export class ServerConfigProvider {

  private _host = 'http://localhost:10000';
  private _checkIfMailTaken = `${this._host}/user/register/checkIfMailTaken/`;


  public get checkIfMailTaken(): string {return this._checkIfMailTaken};


}
