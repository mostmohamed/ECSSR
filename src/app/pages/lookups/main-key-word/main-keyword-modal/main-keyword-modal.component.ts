import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-main-keyword-modal',
  templateUrl: './main-keyword-modal.component.html',
  styleUrls: ['./main-keyword-modal.component.scss']
})
export class MainKeywordModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MainKeywordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
