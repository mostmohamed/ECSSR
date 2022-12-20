import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-news-types-modal',
  templateUrl: './news-types-modal.component.html',
  styleUrls: ['./news-types-modal.component.scss']
})
export class NewsTypesModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewsTypesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
