import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import {BusinessObjectsComponent} from './components/activeProcessDetail/businessObjects.component';
import {StartableProcessesComponent} from './components/startableProcesses/startableProcesses.component';
import {TerminatedProcessesComponent} from './components/terminatedProcesses/terminatedProcesses.component';
import {ActiveProcessDetailComponent} from './components/activeProcessDetail/activeProcessDetail.component';
import { ActiveProcessesComponent} from './components/activeProcesses/activeProcesses.component';
import {FormsModule} from '@angular/forms';
import {MyProcessesComponent} from './components/myProcesses/myProcesses.component';
import {DashboardComponent} from './dashboard.component';
import {ReviewProcessesComponent} from './components/reviewProcesses/reviewProcesses.component';
import {ModalComponent} from './components/modal/modal.component';
import {ValidatedProcessesComponent} from './components/validatedProcesses/validatedProcesses.component';
import {CreateOrgaModalComponent} from './components/createOrgaModal/createOrgaModal.component';
import {ToasterModule} from 'angular2-toaster';




@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ToasterModule,
  ],
  declarations: [
    DashboardComponent,
    ActiveProcessesComponent,
    ActiveProcessDetailComponent,
    TerminatedProcessesComponent,
    StartableProcessesComponent,
    BusinessObjectsComponent,
    MyProcessesComponent,
    ReviewProcessesComponent,
    ValidatedProcessesComponent,
    ModalComponent,
    CreateOrgaModalComponent,
  ],
})
export class DashboardModule { }
