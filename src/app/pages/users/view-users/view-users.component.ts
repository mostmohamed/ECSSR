import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, NavigationExtras } from '@angular/router';
import { TranslationService } from '@core/i18n';
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
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) pagintor: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  userSubject: Observable<UserModel[]>;
  displayedColumns: string[] = ['email', 'fullName', 'specialization', 'jobTitle', 'organization', 'isContributor', 'isDisabled', 'Actions'];
  selection = new SelectionModel<UserModel>(false, []);

  data: UserModel[] = [];
  dataSource: MatTableDataSource<UserModel>;
  websiteLang: string = '';

  constructor(private router: Router,
    private cdr: ChangeDetectorRef, private translationSrvc: TranslationService) {


  }

  ngAfterViewInit(): void {
    const user: UserModel = {
      description: "",
      email: "email@email.com",
      fullName: "User 1",
      isDisabled: false,
      organization: "ECSSR",
      jobTitle: "Accountant",
      userName: "userName",
      specialization: "specialization",
      userId: 1,
      isContributor: false,
      photo: "",
      photoFile: null,
      roles: []


    };

    this.data.push(user);

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.pagintor;
    this.cdr.detectChanges();
  }

  viewUser(id: any) {
    const navigationExtras: NavigationExtras = { state: { userId: id } };
    // this.router.navigate(
    //   [`dashboard/${appRoutesNames.userManagement}/${appRoutesNames.users}`],
    //   navigationExtras
    // );
  }

  ngOnInit(): void {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
