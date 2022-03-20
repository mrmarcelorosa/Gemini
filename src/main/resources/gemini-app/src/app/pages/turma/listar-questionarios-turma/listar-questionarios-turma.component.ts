import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-questionarios-turma',
  templateUrl: './listar-questionarios-turma.component.html',
  styleUrls: ['./listar-questionarios-turma.component.scss']
})
export class ListarQuestionariosTurmaComponent implements OnInit {

  public listQuestionariosTurma;
  public displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private activatedRoute: ActivatedRoute) { 
    this.listQuestionariosTurma = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["questionariosTurma"];
    console.log("LISTA QUESTIONARIOS TURMA", this.listQuestionariosTurma);
  }

  ngOnInit(): void {
  }

  public visualizarRelatorioQuestionario = (questionario) => {
    console.log("QUESTIONARIO", questionario);
  }

}
