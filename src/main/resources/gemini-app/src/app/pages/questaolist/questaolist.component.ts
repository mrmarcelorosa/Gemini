import { QuestaoModalComponent } from './../questao-modal/questao-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {QuestaoService} from './../../service/questao.service';

@Component({
  selector: 'app-questaolist',
  templateUrl: './questaolist.component.html',
  styleUrls: ['./questaolist.component.scss']
})
export class QuestaolistComponent implements OnInit {
  questaoList: Array<any> = [];
  constructor(private dialog: MatDialog, private questaoService: QuestaoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.questaoService.getAll().toPromise().then(data => {
      this.questaoList = data;
      console.log(data);
    })
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
