import { QuestionarioModalComponent } from './../questionario-modal/questionario-modal.component';
import { QuestionarioService } from './../../service/questionario.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Questionario } from 'src/app/model/questionario';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  questionarioList: Array<any> = []

  constructor(private service: QuestionarioService, private dialog: MatDialog) { }

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
      width: '500px'
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

}
