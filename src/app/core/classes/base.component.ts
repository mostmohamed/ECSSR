import { Directive, OnInit, OnDestroy } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
//import { ConfirmationDialogComponent } from '@shared/components/confirmation-dialog/confirmation-dialog.component';
import { environment } from '@src/environments/environment';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppInjector } from './app.injector';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class AppBaseComponent implements OnDestroy {
  //isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  protected translate;
  protected snackBar: MatSnackBar;
  protected dialog: MatDialog;
  public fileServerPath(fileUrl: string): string {
    return fileUrl ? `${environment.apiUrl}staticfiles/${fileUrl}` : 'assets/media/avatars/blank.png';
  }
  constructor() {
    const injector = AppInjector.getInjector();
    this.snackBar = injector.get(MatSnackBar);
    this.dialog = injector.get(MatDialog);

    this.translate = injector.get(TranslateService);
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

  }

  public markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  protected openDialig(dialogType: number = 1) {
    // return this.dialog.open(ConfirmationDialogComponent, {
    //   data: {
    //     message: dialogType == 1 ? 'Are you sure you want to delete?' : "Are you sure you want to change status?",
    //     buttonText: {
    //       ok: 'Save',
    //       cancel: 'No',
    //     },
    //   },
    // });
  }
  protected successSnackBar() {
    this.snackBar.open('Data has been saved successfully', 'Ok', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  public disableAlert(snackBar: MatSnackBar) {
    snackBar.open(this.translate.instant('disableAlert'), 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
