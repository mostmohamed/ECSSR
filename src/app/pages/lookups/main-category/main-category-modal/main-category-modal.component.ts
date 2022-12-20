import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-main-category-modal',
  templateUrl: './main-category-modal.component.html',
  styleUrls: ['./main-category-modal.component.scss']
})
export class MainCategoryModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MainCategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
