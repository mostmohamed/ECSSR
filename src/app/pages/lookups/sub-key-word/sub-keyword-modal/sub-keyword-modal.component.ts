import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-sub-keyword-modal',
  templateUrl: './sub-keyword-modal.component.html',
  styleUrls: ['./sub-keyword-modal.component.scss']
})
export class SubKeywordModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubKeywordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
