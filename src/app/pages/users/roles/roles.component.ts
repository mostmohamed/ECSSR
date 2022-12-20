import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupConfig } from '@core/types/form.group.config';

export interface RoleModel {
  roleId?: any;
  roleName: string | null;
  isDisabled: boolean;
  permissions: RolePermissionsModel[];
}
export interface RolePermissionsModel {

  roleIPermissionId?: any;

  permissionId?: any;


}

export interface RoleModelView {
  roleId?: any;
  roleName: string;
  isDisabled: boolean;
  permissionsGroup?: PermissionGroupViewModel[];
}
export interface PermissionGroupModel {
  permissionGroup: string;
  permissions: PermissionModel[];
}
export interface PermissionModel {
  permissionId: number;
  permissionName: string;
  roleIPermissionId?: number;
}

export interface PermissionGroupViewModel {
  permissionGroup: string;
  permissions: PermissionViewModel[];
}
export interface PermissionViewModel extends PermissionModel {
  checked: boolean;
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roleFormGroup: FormGroup;
  permissionGroups: PermissionGroupModel[];
  formGroupConfig: FormGroupConfig<RoleModelView>;
  permissionGroupConfig: FormGroupConfig<PermissionGroupViewModel>;
  permissionFormConfig: FormGroupConfig<PermissionViewModel>;

  permissionFormArray(index: number): FormArray | undefined {
    if (this.permissionGroupFormArray != null) {
      return this.permissionGroupFormArray()?.at(index)
        .get('permissions') as FormArray;
    }
    return undefined;
  }
  permissionGroupFormArray(): FormArray | undefined {
    if (this.roleFormGroup != null) {
      return this.roleFormGroup.get('permissionsGroup') as FormArray;
    }
    return undefined;
  }
  constructor(
    private fb: FormBuilder,


    private cdrf: ChangeDetectorRef
  ) {

    this.loadData();

  }

  ngOnInit(): void {
    this.initForm();
    this.shortSummarySelectionChange();
  }

  initForm() {
    this.permissionFormConfig = {
      permissionId: [0],
      permissionName: [''],
      roleIPermissionId: [0],
      checked: [false],
    };

    this.permissionGroupConfig = {
      permissionGroup: [''],
      permissions: this.fb.array<PermissionViewModel>([]),
    };
    const tt = this.fb.array<any>([]);
    this.formGroupConfig = {
      roleId: [null],
      isDisabled: [false],
      roleName: ['', [Validators.required, Validators.minLength(3)]],

    };

    this.roleFormGroup = this.fb.group(this.formGroupConfig);
    this.permissionGroupFormArray()?.clear();
  }
  shortSummarySelectionChange() {

  }
  createPermissionFromGroup(): any {
    const formGroup = this.fb.group(this.permissionFormConfig);
    return formGroup;
  }
  createPermissionGroupFromConfig(b: PermissionModel[]) {
    let arr = new FormArray<any>([]);
    b.forEach(() => {
      arr.push(this.createPermissionFromGroup());
    });
    this.permissionGroupConfig = {
      permissionGroup: [''],
      permissions: arr,
    };
    return this.fb.group(this.permissionGroupConfig);
  }
  loadData() {

    //   .subscribe((permission) => {
    //   this.permissionGroups = permission;
    // });
  }

  selectionChange(role: RoleModelView) {
    if (role == null) {
      return;
    }
    this.initForm();

    this.permissionGroupFormArray()?.clear();

    role.permissionsGroup?.forEach((b, i) => {
      this.permissionGroupFormArray()?.push(
        this.createPermissionGroupFromConfig(b.permissions)
      );
    });
    // this.permissionGroupFormArray().controls.forEach((element) => {
    //   (element.get('permissions') as FormArray).push(
    //     this.fb.group(this.permissionFormConfig)
    //   );
    // });
    this.roleFormGroup.patchValue(role);
    this.cdrf.detectChanges();
  }

  new() {
    //this.initForm();
    const empty: RoleModel = {
      roleName: null,
      isDisabled: false,
      permissions: [],
    };
  }
  saveRole() {

  }
  deleteRole() {

  }

  getFormData(): RoleModel {
    const formData = this.roleFormGroup.value as unknown as RoleModelView;
    const permissions = formData.permissionsGroup?.reduce(
      (accumulator, value: any) => {
        return accumulator.concat(value.permissions.filter((x: any) => x.checked));
      },
      []
    );

    let role: RoleModel = {
      roleId: formData.roleId,
      roleName: formData.roleName,
      isDisabled: formData.isDisabled,
      permissions: permissions as unknown as RolePermissionsModel[],
    };
    return role;
  }

  ngOnDestroy() {

  }
}
