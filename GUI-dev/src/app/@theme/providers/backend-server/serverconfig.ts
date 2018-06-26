import { Injectable } from '@angular/core';


@Injectable()
export class ServerConfigProvider {

  private _host = 'http://localhost:10000/';
  private _checkIfMailTaken = `${this._host}user/register/checkIfMailTaken/`;
  private _getUser = `${this._host}/api/me/`;
  private _getStoreProcesses = `${this._host}api/store/processes`;
  private _getOrPostStoreProcessRatings = `${this._host}api/store/processRatings`;
  private _getUserProcesses = `${this._host}api/store/processes/byUser`;
  private _getProcessById = `${this._host}api/store/process/{processId}`;
  // temporäre Endpunkte --> muss noch auf user approved geändert werden
  private _getApprovedProcessesByUser = `${this._host}api/store/processes/approved`;
  private _getNotApprovedProcessesByUser = `${this._host}api/store/processes/notApproved`;
  private _createOrganization = `${this._host}api/organization`;
  private _getOrgaProcesses = `${this._host}api/store/processes/byOrga`;



  public get checkIfMailTaken(): string {return this._checkIfMailTaken};
  public get getUser(): string {return this._getUser};
  public get getStoreProcesses(): string {return this._getStoreProcesses};
  public get getStoreProcessRatings(): string {return this._getOrPostStoreProcessRatings};
  public get postStoreProcessRating(): string {return this._getOrPostStoreProcessRatings};
  public get getUserProcesses(): string {return this._getUserProcesses};
  public get getProcessById(): string {return this._getProcessById};
  public get getApprovedProcessesByUser(): string {return this._getApprovedProcessesByUser};
  public get getNotApprovedProcessesByUser(): string {return this._getNotApprovedProcessesByUser};
  public get createOrganizaion(): string {return this._createOrganization};
  public get getOrgaProcesses(): string {return this._getOrgaProcesses};
}
