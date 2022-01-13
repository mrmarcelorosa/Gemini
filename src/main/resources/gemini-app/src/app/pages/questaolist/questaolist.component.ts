import { QuestaoModalComponent } from './../questao-modal/questao-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {QuestaoService} from './../../service/questao.service';
import { Questao } from 'src/app/model/questao';

@Component({
  selector: 'app-questaolist',
  templateUrl: './questaolist.component.html',
  styleUrls: ['./questaolist.component.scss']
})
export class QuestaolistComponent implements OnInit {
  questaoList: Array<any> = [];
  alternativas2: Array<any>;
  constructor(private dialog: MatDialog, private questaoService: QuestaoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.questaoService.getQuestoes(parseInt(localStorage.getItem('id_questionario'))).toPromise().then(data => {
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

  delete(questao: Questao) {
    console.log("Delete")
    if (confirm("Deseja excluir")) {
      this.questaoService.delete(questao).toPromise().then(data => {
        alert("Questão removida com sucesso!")
        this.getAll();
      })
    } else {

    }
  }
  separarQuestoes(a: String){
    let toArray = a.toString().split(";");
    this.alternativas2 = toArray;
  }

}
