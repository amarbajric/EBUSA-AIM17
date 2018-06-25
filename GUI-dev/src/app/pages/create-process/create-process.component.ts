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
    const that = this;
    const reader = new FileReader();
    if (this.owlFile) {
      reader.onload = function(e) {
        const body = {owlContent: reader.result}
        that.gateway.uploadOWLModel(body)
          .subscribe(
            data => {
              that.processModel = JSON.parse(data['_body']);
              that.processModel.boms.forEach(businessObject => {
                that.buildedBusinessObjects[businessObject.id] = {};
              });
              that.initRules();
            },
            err => that.error = 'Die OWL Datei konnte nicht richtig interpretiert werden!',
            () => {
            },
          );
      }
      reader.readAsText(this.owlFile);
    }
  }
}
