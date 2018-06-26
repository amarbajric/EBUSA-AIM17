import { Component } from '@angular/core';
import {StoreProcess} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngx-create-process',
  templateUrl: './create-process.component.html',
})
export class CreateProcessComponent {

  process: StoreProcess = new StoreProcess();
  owlFile;
  processModelOwl;
  buildedBusinessObjects = {};

  constructor(private gateway: GatewayProvider, private modalService: NgbModal) {

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

  createProcess(form): void {
    console.log('hallo ich bin hier')
    console.log ('owl' + this.owlFile)
    this.gateway.createProcess(this.process).then(() =>
    {
      console.log('now uplaod OWL')
      this.gateway.uploadOWLModel(this.process.processId, this.owlFile).then(() => console.log('success'))
        .catch(() => console.log('no success'));
    })
      .catch(() => console.log('no success'))
  }
       /* this.gateway.uploadOWLModel(1, this.owlFile)
          .then(
            data => {
              console.log('uploaded OWL');
              })
          .catch(err => console.log('Die OWL Datei konnte nicht richtig interpretiert werden!'));
        // reader.readAsText(that.owlFile);
      }*/
    //}
}
