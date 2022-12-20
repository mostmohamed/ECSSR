import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '@core/i18n';
import { RolesComponent } from './roles/roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';



@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUsersComponent,
    RolesComponent,
    RolesListComponent
  ],
  imports: [RouterModule.forChild([
    {
      path: '',

      children: [
        {
          path: "role-list",
          component: RolesListComponent
        },
        {
          path: "role",
          component: RolesComponent
        },
        {
          path: "view-users",
          component: ViewUsersComponent
        },
        {
          path: "create-newuser",
          component: CreateUserComponent
        }
      ]
    },
  ]),
    CommonModule, SharedModule, MaterialModule
  ]
})
export class UsersModule { }
