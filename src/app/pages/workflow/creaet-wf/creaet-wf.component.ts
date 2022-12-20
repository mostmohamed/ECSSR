import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from '@core/i18n';
import { FormGroupConfig } from '@core/types/form.group.config';
export interface WFRejectReasonModel {
  reasonId?: number;
  reasonText?: string;
}
export interface WorkflowScenarioModel {
  isDisabled: boolean;
  scenarioId?: number;
  wfName?: string;
  levels: WFLevels[];
}

export interface WFLevels {
  levelId?: number;
  levelName: string;
  levelOrder?: number;
  roleId?: number;
  canPublish: boolean;
}

@Component({
  selector: 'app-creaet-wf',
  templateUrl: './creaet-wf.component.html',
  styleUrls: ['./creaet-wf.component.scss']
})
export class CreaetWFComponent implements OnInit {
  workflowFormGroup: FormGroup;
  workflowFormGroupConfig: FormGroupConfig<WorkflowScenarioModel>;
  levelFormGroupconfig: FormGroupConfig<WFLevels>;
  websiteLang: string;
  get levelsFormArray() {
    var sss1 = <FormArray>this.workflowFormGroup.get('levels');
    return <FormArray>this.workflowFormGroup.get('levels');
  }

  workflow: { scenarioId: number };
  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router, private translationSrvc: TranslationService
  ) {

    this.workflow = this.router?.getCurrentNavigation()?.extras.state as {
      scenarioId: number;
    };


  }

  ngOnInit(): void {
    this.initForm();
    if (this.workflow?.scenarioId) {
    }
  }
  initForm() {
    this.levelFormGroupconfig = {
      levelId: [0],
      levelName: [""],
      levelOrder: [0],
      roleId: [0],
      canPublish: [false]
    };
    this.workflowFormGroupConfig = {
      scenarioId: [0],
      isDisabled: [false],
      wfName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      levels: this.fb.array([]),
    };

    this.workflowFormGroup = this.fb.group(this.workflowFormGroupConfig);
  }

  new() {
    this.initForm();
  }
  loadData(workflow: WorkflowScenarioModel) {
    this.levelsFormArray.clear();
    this.workflowFormGroup.reset();
    workflow.levels?.forEach((x) => {
      this.levelsFormArray.push(this.fb.group(this.levelFormGroupconfig));
    });

    this.workflowFormGroup.patchValue(workflow);
    this.cdr.detectChanges();
  }

  assignLevel() {

    this.levelsFormArray.push(this.fb.group(this.levelFormGroupconfig));
    this.cdr.detectChanges();
  }
  deleteLevel(level: any) {
    this.levelsFormArray.removeAt(level);
  }

  deleteWorkflow() {

  }

  saveWorkflow() {

  }

  compareFn(c1: any) {
  }

}
