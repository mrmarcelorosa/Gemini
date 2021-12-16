import { QuestionarioModalComponent } from './../questionario-modal/questionario-modal.component';
import { QuestionarioService } from './../../service/questionario.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Questionario } from 'src/app/model/questionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  questionarioList: Array<any> = []

  constructor(private service: QuestionarioService, private dialog: MatDialog, private rout:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().toPromise().then(data => {
      this.questionarioList = data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionarioModalComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAll();
    });
  }

  delete(questionario: Questionario) {
    console.log("Delete")
    if (confirm("Deseja excluir")) {
      console.log(questionario)
      this.service.delete(questionario).toPromise().then(data => {
        alert("Questionario removido com sucesso!")
        this.getAll();
      })
    } else {

    }
  }

  newQuestao(q:Questionario){
    localStorage.setItem('id_questionario', q.id.toString());
    this.rout.navigate(['/questao'])
    
  }

}
