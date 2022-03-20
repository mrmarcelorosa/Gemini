import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Turma } from 'src/app/model/turma';


@Component({
  selector: 'app-view-turma',
  templateUrl: './view-turma.component.html',
  styleUrls: ['./view-turma.component.scss']
})
export class ViewTurmaComponent implements OnInit {

  public turmaToView: Turma;
  public displayedColumns = ['name', 'email']

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    this.turmaToView = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["turma"];
    
    console.log("TURMA", this.turmaToView.studentList.length);
  }

  ngOnInit(): void {
  }

  public goBackListTurma = () => {
    this.router.navigate(['turma/list']);
  }

  public viewQuestionariosTurma = () => {
    this.router.navigate([`turma/list-questionarios-turma/${this.turmaToView.id}`]);
  }
}
