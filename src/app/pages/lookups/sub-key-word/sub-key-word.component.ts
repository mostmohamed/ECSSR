import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubCategoryModalComponent } from '../sub-category/sub-category-modal/sub-category-modal.component';
import { SubKeywordModalComponent } from './sub-keyword-modal/sub-keyword-modal.component';

@Component({
  selector: 'app-sub-key-word',
  templateUrl: './sub-key-word.component.html',
  styleUrls: ['./sub-key-word.component.scss']
})
export class SubKeyWordComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog(isNew: any = null): void {
    const data = isNew == null ? "SUB-Keywords" : "";
    const dialogRef = this.dialog.open(SubKeywordModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
