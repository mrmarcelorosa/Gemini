import { QuestaoModalComponent } from './../questao-modal/questao-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-questaolist',
  templateUrl: './questaolist.component.html',
  styleUrls: ['./questaolist.component.scss']
})
export class QuestaolistComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestaoModalComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.getAll();
    });
  }

}
