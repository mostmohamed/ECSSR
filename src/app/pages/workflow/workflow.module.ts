import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaetWFComponent } from './creaet-wf/creaet-wf.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { TranslationModule } from '@core/i18n';
import { WfListComponent } from './wf-list/wf-list.component';



@NgModule({
  declarations: [CreaetWFComponent, WfListComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',

        children: [
          {
            path: "create-wf-scenario",
            component: CreaetWFComponent
          },
          {
            path: 'view-wf',
            component: WfListComponent
          }
        ]
      }])
    ,
    CommonModule, SharedModule, MaterialModule, TranslationModule
  ]
})
export class WorkflowModule { }
