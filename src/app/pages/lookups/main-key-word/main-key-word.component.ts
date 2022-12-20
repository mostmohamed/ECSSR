import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainKeywordModalComponent } from './main-keyword-modal/main-keyword-modal.component';

@Component({
  selector: 'app-main-key-word',
  templateUrl: './main-key-word.component.html',
  styleUrls: ['./main-key-word.component.scss']
})
export class MainKeyWordComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog(isNew: any = null): void {
    const data = isNew == null ? "MAIN-Keywords" : "";
    const dialogRef = this.dialog.open(MainKeywordModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
