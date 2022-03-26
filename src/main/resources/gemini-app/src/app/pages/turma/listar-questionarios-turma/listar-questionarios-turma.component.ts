import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionario } from 'src/app/model/questionario';
import { Turma } from 'src/app/model/turma';
import { QuestionarioModalComponent } from '../../questionario-modal/questionario-modal.component';

@Component({
  selector: 'app-listar-questionarios-turma',
  templateUrl: './listar-questionarios-turma.component.html',
  styleUrls: ['./listar-questionarios-turma.component.scss']
})
export class ListarQuestionariosTurmaComponent implements OnInit {

  public listQuestionariosTurma;
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  turmaAtual: Turma

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private router: Router, private dialog: MatDialog) { 
    this.listQuestionariosTurma = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["questionariosTurma"];
    console.log("LISTA QUESTIONARIOS TURMA", this.listQuestionariosTurma);
  }

  ngOnInit(): void {
    this.turmaAtual = JSON.parse(localStorage.getItem('turmaQuestionario'));
  }

  public visualizarRelatorioQuestionario = (questionario) => {
    this.router.navigate([`turma/questionarios-turma/relatorio-questionario/${questionario.id}`]);
  }

  public goBack = () => {
    this.location.back();
  };
  @ViewChild(MatTable) table: MatTable<Questionario>
  salvarQuestionario(){
    const dialogRef = this.dialog.open(QuestionarioModalComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listQuestionariosTurma.push(result);
      this.table.renderRows();
    });
  }
  isDono() {
    let user = JSON.parse(localStorage.getItem('user_data'));
    console.log("turma", this.turmaAtual);
    console.log("user", user)
    if (user.id == this.turmaAtual.mananger.id) {
      return true;
    } else {
      return false;
    }
  }

  administrarQuestionario(questionario: Questionario){
      localStorage.setItem('id_questionario', questionario.id.toString());
      this.router.navigate(['/questao']);
  }

  responderQuestionario(questionario: Questionario){
    localStorage.setItem('id_questionario', questionario.id.toString());
    this.router.navigate(['/responder-questao']);
  }

}
