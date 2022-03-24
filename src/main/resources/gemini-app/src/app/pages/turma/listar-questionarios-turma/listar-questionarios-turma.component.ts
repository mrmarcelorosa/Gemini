import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-questionarios-turma',
  templateUrl: './listar-questionarios-turma.component.html',
  styleUrls: ['./listar-questionarios-turma.component.scss']
})
export class ListarQuestionariosTurmaComponent implements OnInit {

  public listQuestionariosTurma;
  public displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private router: Router) { 
    this.listQuestionariosTurma = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["questionariosTurma"];
    console.log("LISTA QUESTIONARIOS TURMA", this.listQuestionariosTurma);
  }

  ngOnInit(): void {
  }

  public visualizarRelatorioQuestionario = (questionario) => {
    this.router.navigate([`turma/questionarios-turma/relatorio-questionario/${questionario.id}`]);
  }

  public goBack = () => {
    this.location.back();
  };

}
