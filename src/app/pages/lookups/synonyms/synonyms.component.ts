import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SynonymsModalComponent } from './synonyms-modal/synonyms-modal.component';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.scss']
})
export class SynonymsComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog(isNew: any = null): void {
    const data = isNew == null ? "SUB-Keywords" : "";
    const dialogRef = this.dialog.open(SynonymsModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
