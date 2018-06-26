import { Component } from '@angular/core';
import {StoreProcess} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";

@Component({
  selector: 'ngx-create-process',
  templateUrl: './create-process.component.html',
})
export class CreateProcessComponent {

  process: StoreProcess = new StoreProcess();
  owlFile;
  processModelOwl;
  buildedBusinessObjects = {};

  constructor(private gateway: GatewayProvider) {

  }

  onFileChange(event) {
    // const that = this;
    this.owlFile = event.srcElement.files[0];
    const split = this.owlFile.name.split('.');
    if (split[split.length - 1] !== 'owl') {
      this.owlFile = undefined;
      event.target.value = '';
    }
  }

  uploadOWLModel(form): void {
    console.log('hallo ich bin hier')
    let that = this;
    const reader = new FileReader();
    console.log(that.owlFile);
    if (that.owlFile) {
      reader.onload = function (e) {
      console.log('reader result' + reader.result)
        const body = {owlContent: reader.result}
        that.gateway.uploadOWLModel(body)
          .then(
            data => {
              that.processModelOwl = JSON.parse(data['_body']);
              console.log(that.processModelOwl);
              that.processModelOwl.boms.forEach(businessObject => {
                that.buildedBusinessObjects[businessObject.id] = {};
              })
            })
        .catch(err => console.log('Die OWL Datei konnte nicht richtig interpretiert werden!'));
        reader.readAsText(that.owlFile);
      }
      that.initRules();
    }
  }

  initRules(): void {
    const that = this;
    /*this.gateway.getRules()
      .subscribe(
        data => {
          // console.log(data);
          that.rules = JSON.parse(data['_body']);
          that.currentSelectedBusinessObject = that.processModel.boms[0];
          that.initFormBuilder(that.currentSelectedBusinessObject);
        },
        err => that.error = err,
        () => {}, // console.log('Request Complete')
      );*/
  }
}
