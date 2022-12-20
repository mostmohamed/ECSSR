import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsNatureModalComponent } from './news-nature-model/news-nature-model.component';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.scss']
})
export class NatureComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog(isNew: any = null): void {
    const data = isNew == null ? " Nature 1" : "";
    const dialogRef = this.dialog.open(NewsNatureModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
