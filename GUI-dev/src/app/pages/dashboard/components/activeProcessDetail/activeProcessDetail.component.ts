import 'rxjs/add/operator/switchMap';
import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProcessesService} from '../../../../allProcesses.service';
import {User} from '../../../../../models/models';

interface BusinessObject {
  bomId: number,
  boiId: number,
  name: string,
  fields: [{
    bofmId: number,
    bofiId: number,
    name: string,
    type: string,
    required: boolean,
    readonly: boolean,
    value: any,
  }],
  children: [BusinessObject];
}

@Component({
  selector: 'ngx-active-process-detail',
  styleUrls: ['./activeProcessDetail.scss'],
  templateUrl:  './activeProcessDetail.html',
})
export class ActiveProcessDetailComponent implements OnInit {

  piId: number;
  msg = undefined;
  subjectsState: {
    piId: number,
    status: string,
    startTime: number[],
    endTime: number[],
    subjects: [{
      ssId: number,
      userId: number,
      subjectName: string,
      stateName: string,
      stateFunctionType: string,
      subState: string,
      lastChanged: number[],
      user: any,
    }],
  };
  businessObjects: BusinessObject[];
  nextStates: [{
    name: string,
    nextStateId: number,
    endState: boolean,
  }];
  assignedUsers: [{
    smId: number,
    userId: number,
    assignedRules: string[],
    subjectName: string,
  }];
  possibleUserAssignments = [];
  selectedUserAssignments = [];
  nextIsEndState = false;
  isFinished = false;
  myCurrentState;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router,
              private _user: User) {
  }

  ngOnInit() {
    const that = this;
    this.piId = + this.route.snapshot.params['piId'];
    this.businessObjects = undefined;
    this.nextStates = undefined;
    // this.spinner.show();
    if (!this.nextIsEndState) {
      that.assignedUsers = undefined;
      this.service.getProcessState(this.piId)
        .subscribe(
          data => {
            that.subjectsState = JSON.parse(data['_body']);
            that.myCurrentState = that.subjectsState.subjects.filter(s => s.userId === that._user.getUid())
              [0].stateName;
            // that.spinner.hide();
          },
          err => {
            that.msg = {text: err, type: 'error'}
            // console.log(err);
            // that.spinner.hide();
          },
        );

      this.service.getTasksForProcessForUser(this.piId)
        .subscribe(
          data => {
            let dataJson;
            try {
              dataJson = JSON.parse(data['_body']);
            } catch (e) {
              return false;
            }
            that.businessObjects = dataJson.businessObjects;
            that.nextStates = dataJson.nextStates;
            that.assignedUsers = dataJson.assignedUsers;
            if (that.assignedUsers) {
              that.getPossibleUserAssignments();
            }
          },
          err => {
            that.msg = {text: err, type: 'error'}
            // console.log(err);
          },
        );
    } else {
      this.isFinished = true;
      // this.spinner.hide();
    }
  }

  getPossibleUserAssignments() {
    const that = this;
    this.assignedUsers.forEach(
      au => {
        if (!au.userId) {
          that.service.getPossibleUsersForProcessModel(au.assignedRules).
          subscribe(
            data => {
              const users = JSON.parse(data['_body']);
              au.assignedRules.forEach(rule => {
                that.possibleUserAssignments.push({rule: rule, smId: au.smId, users: users, subjectName: au.subjectName,
                });
                that.selectedUserAssignments[rule] = undefined;
              });
            },
            err => {
              this.msg = {text: err, type: 'error'}
              that.possibleUserAssignments = [];
            },
            () => {}, // console.log('Request done')
          );
        }
      });
  }

  submitForm(form) {
    const that = this;
    const businessObjectsValues = [];
    const userAssignments = [];
    that.nextIsEndState = that.nextStates.filter(ns => ns.nextStateId === form.nextStateId)[0].endState;
    if (this.isSendState()) {
       Object.keys(form.value).forEach(k => {
        const kSplit = k.split('User-Assignment_:-');
        if (kSplit.length > 1) {
          const value = form.value[k];
          userAssignments.push({smId: value.smId, userId: value.userId});
        }
      });
    }

    this.businessObjects.forEach(bo => {
      businessObjectsValues.push(this.getBusinessObjectsValues(bo, form));
    });
    const businessObjectsAndNextStateAndUserAssignments = {
      nextStateId: form.nextStateId,
      businessObjects: businessObjectsValues,
      userAssignments: userAssignments,
    };

    this.submitStateChange(businessObjectsAndNextStateAndUserAssignments);

  }

  private getBusinessObjectsValues(bo: BusinessObject, form): any {
    const fields = []
    const childBoValues = [];
      Object.keys(form.value).forEach(k => {
      const kSplit = k.split('-:_');
      if (kSplit.length > 1) {
        const bomId = kSplit[0];
        const bofmId = kSplit[1];
        if (bomId === (bo.bomId).toString()) {
          const value = form.value[k];
          fields.push({bofmId: bofmId, value: value});
        }
      }
    });
    bo.children.forEach(childBo => {
      childBoValues.push(this.getBusinessObjectsValues(childBo, form))},
    );
    return {bomId: bo.bomId, fields: fields, children: childBoValues};
  }

  private submitStateChange(businessObjectsAndNextStateAndUserAssignments) {
    const that = this;
    this.service.submitBusinessObjectsAndNextStateAndUserAssignments(this.piId, businessObjectsAndNextStateAndUserAssignments)
      .subscribe(
        data => {
          that.ngOnInit();
        },
        err => {
          that.msg = {text: err, type: 'error'}
          // console.log(err);
        },
      );
  }

  // dirty hack so that the value of the checkbox changes (otherwise the form submit value will stay the original value)
  onChangeCheckboxFn(that, element) {
    const name = element.name.split('-:_')[0];
    that.model._parent.form.controls[name].setValue(element.checked)
  }

  isReceiveState() {
    if (this.subjectsState) {
      return this.subjectsState.subjects.filter(s => s.userId === this._user.getUid())[0].stateFunctionType === 'RECEIVE';
    } else {
      return false;
    }
  }

  isToReceiveState() {
    if (this.subjectsState) {
      return this.subjectsState.subjects.filter(s => s.userId === this._user.getUid())[0].subState === 'TO_RECEIVE';
    } else {
      return false;
    }
  }

  isReceivedState() {
    if (this.subjectsState) {
      return this.subjectsState.subjects.filter(s => s.userId ===
        this._user.getUid())[0].subState === 'RECEIVED';
    } else {
      return false;
    }
  }

  isSendState() {
    if (this.subjectsState) {
      return this.subjectsState.subjects.filter(s => s.userId ===
        this._user.getUid())[0].stateFunctionType === 'SEND';
    } else {
      return false;
    }
  }
}
