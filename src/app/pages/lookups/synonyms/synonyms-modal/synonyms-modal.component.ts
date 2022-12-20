import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../countries/countries-modal/countries-modal.component';

@Component({
  selector: 'app-synonyms-modal',
  templateUrl: './synonyms-modal.component.html',
  styleUrls: ['./synonyms-modal.component.scss']
})
export class SynonymsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SynonymsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
