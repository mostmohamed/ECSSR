import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-classifications-modal',
  templateUrl: './classifications-modal.component.html',
  styleUrls: ['./classifications-modal.component.scss']
})
export class ClassificationsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClassificationsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
