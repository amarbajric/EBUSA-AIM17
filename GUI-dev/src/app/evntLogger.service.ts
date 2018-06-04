import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {User} from '../models/models';

@Injectable()
export class EventLoggerService {

  restApi = window.location.protocol + '//' + window.location.hostname + ':10000/ev';

  constructor(private _authHttp: HttpClient/*, private _user: User*/) {

  }

   getEventLog(pmId, subject) {
    return this._authHttp.get(this.restApi + '/eventlog/' + pmId + '/' + subject);
   }

   getEventLogDownloadLink(pmId, subject) {
     return this.restApi + '/eventlogCSV/' + pmId + '/' + subject;
   }

   manipulatePNML(pnmlFile, csvFile) {
     const data = {
      'pnmlContent': pnmlFile,
      'csvLog': csvFile,
    };
    const body = JSON.stringify(data);
     return this._authHttp.post(this.restApi + '/manipulatePNML/', body);
   }

   generateOWL(processModelName, pnmlFiles) {
     return this._authHttp.post(this.restApi + '/generateOWL/', {processModelName, pnmlFiles});
   }
}
