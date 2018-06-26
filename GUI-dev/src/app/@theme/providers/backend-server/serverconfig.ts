import { Injectable } from '@angular/core';


@Injectable()
export class ServerConfigProvider {

  private _host = 'http://localhost:10000/';
  private _checkIfMailTaken = `${this._host}user/register/checkIfMailTaken/`;
  private _getUser = `${this._host}/api/me/`;
  private _getStoreProcesses = `${this._host}api/store/processes`;
  private _getStoreProcessRatings = `${this._host}api/store/processRating`;
  private _getPostStoreProcessRating = `${this._host}api/store/processRating`;

  public get checkIfMailTaken(): string {return this._checkIfMailTaken};
  public get getUser(): string {return this._getUser};
  public get getStoreProcesses(): string {return this._getStoreProcesses};
  public get getStoreProcessRatings(): string {return this._getStoreProcessRatings};
  public get postStoreProcessRating(): string {return this._getPostStoreProcessRating};

}
