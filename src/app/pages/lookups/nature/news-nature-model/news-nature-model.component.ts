import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-news-nature-model',
  templateUrl: './news-nature-model.component.html',
  styleUrls: ['./news-nature-model.component.scss']
})
export class NewsNatureModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewsNatureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
