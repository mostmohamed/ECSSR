import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsTypesModalComponent } from './news-types-modal/news-types-modal.component';

@Component({
  selector: 'app-news-types',
  templateUrl: './news-types.component.html',
  styleUrls: ['./news-types.component.scss']
})
export class NewsTypesComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog(isNew: any = null): void {
    const data = isNew == null ? "TYPE1" : "";
    const dialogRef = this.dialog.open(NewsTypesModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
