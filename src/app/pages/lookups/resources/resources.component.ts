import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResourceModalComponent } from './resource-modal/resource-modal.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(isNew: any = null): void {
    const data = isNew == null ? "الإمارات العربيه المتحدة" : "";
    const dialogRef = this.dialog.open(ResourceModalComponent, {
      data: { id: isNew, name: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
