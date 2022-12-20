import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkflowScenarioModel } from '../creaet-wf/creaet-wf.component';

@Component({
  selector: 'app-wf-list',
  templateUrl: './wf-list.component.html',
  styleUrls: ['./wf-list.component.scss']
})
export class WfListComponent implements OnInit {

  workflowSubject: Observable<WorkflowScenarioModel[]>;
  constructor() { }

  ngOnInit(): void {
  }
  viewWorkflow(scenarioId: any) { }
}
