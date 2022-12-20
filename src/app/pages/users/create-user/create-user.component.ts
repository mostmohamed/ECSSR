import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, NavigationExtras } from '@angular/router';
import { TranslationService } from '@core/i18n';
import { FormGroupConfig } from '@core/types/form.group.config';
import { ConfirmPasswordValidator } from '@modules/auth/components/registration/confirm-password.validator';
import { Observable } from 'rxjs';
export interface UserModel {
  userId?: number;
  userName: string;
  fullName: string;
  photo: string;
  description: string;
  email: string;
  specialization: string;
  jobTitle: string;
  organization: string;
  isContributor?: boolean;
  isDisabled: boolean;
  password?: string;
  cPassword?: string;
  roles: UserRolesModel[];
  photoFile: File | null
}


export interface UserRolesModel {
  roleId?: number;
  userRoleId?: number;
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  hide: boolean = true;
  userFormGroup: FormGroup;

  userFormGroupConfig: FormGroupConfig<UserModel>;
  roleFormGroupconfig: FormGroupConfig<UserRolesModel>;
  imagePreview: any;
  get rolesFormArray() {
    return <FormArray>this.userFormGroup.get('roles');
  }

  photoImageSrc: any;
  user: { userId: number };
  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,

    private router: Router
  ) {
    // this.user = this.router.getCurrentNavigation().extras.state as {
    //   userId: number;
    // };

  }

  ngOnInit(): void {
    this.initForm();
    if (this.user?.userId) {

    }
  }
  initForm() {
    this.roleFormGroupconfig = {
      userRoleId: [0],
      roleId: [0],
    };
    this.userFormGroupConfig = {
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ],
      ],
      jobTitle: [''],
      organization: ['', [Validators.required, Validators.minLength(5)]],
      specialization: [''],
      description: [''],
      isDisabled: [false],
      userId: [0],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          ),
        ],
      ],
      cPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ],
      ],
      photo: [''],
      photoFile: [null],
      roles: this.fb.array([]),
    };
    this.userFormGroup = this.fb.group(this.userFormGroupConfig, {
      validator: ConfirmPasswordValidator.MatchPassword,
    });
    this.userFormGroup.get('photoFile')?.valueChanges.subscribe(res => this.onFileChange(res))
  }
  new() {
    this.initForm();
  }
  loadData(user: UserModel) {
    this.rolesFormArray.clear();
    this.userFormGroup.reset();
    user.roles?.forEach((x) => {
      this.rolesFormArray.push(this.fb.group(this.roleFormGroupconfig));
    });
    if (this.user?.userId) {
      user.password = 'dummy@Passw0rd';
      user.cPassword = user.password;
    }
    this.userFormGroup.patchValue(user);

    this.cdr.detectChanges();
  }

  assignRole() {

    this.rolesFormArray.push(this.fb.group(this.roleFormGroupconfig));
    this.cdr.detectChanges();
  }
  deleteRole(role: any) {
    this.rolesFormArray.removeAt(role);
  }
  resetPassowrd() {

    const userId = this.userFormGroup.get('userId')?.value;

  }
  deleteUser() {
    const userId = this.userFormGroup.controls['userId'].value;


  }
  saveUser() {


  }
  changeUserStatus() {

  }
  compareFn(c1: any) {
  }
  ngOnDestroy() {

  }


  onFileChange(file: any) {

    let reader = new FileReader();

    if (file) {

      reader.readAsDataURL(file);

      reader.onload = () => {

        this.photoImageSrc = reader.result;
        this.cdr.detectChanges();
      }
      // need to run CD since file load runs outside of zone
      this.cdr.markForCheck();
    };

  }
  passwordToggle() { this.hide = !this.hide; }

}
