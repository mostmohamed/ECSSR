import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClassificationsModalComponent } from './classifications-modal/classifications-modal.component';

@Component({
  selector: 'app-classifications',
  templateUrl: './classifications.component.html',
  styleUrls: ['./classifications.component.scss']
})
export class ClassificationsComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog(isNew: any = null): void {
    const data = isNew == null ? " CLASS 1" : "";
    const dialogRef = this.dialog.open(ClassificationsModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
