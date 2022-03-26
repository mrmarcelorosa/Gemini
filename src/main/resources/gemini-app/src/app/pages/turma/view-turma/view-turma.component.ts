import { User } from 'src/app/model/user';
import { StudentCreateComponent } from './../student-create/student-create.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Turma } from 'src/app/model/turma';
import { MatTable } from '@angular/material/table';
import { createGrupoComponent } from '../../creategrupo/creategrupo.component';
import { Grupo } from 'src/app/model/Grupo';


@Component({
  selector: 'app-view-turma',
  templateUrl: './view-turma.component.html',
  styleUrls: ['./view-turma.component.scss']
})
export class ViewTurmaComponent implements OnInit {

  public turmaToView: Turma;
  public displayedColumns = ['name', 'email']
  public displayedColumnsGrupos = ['name', 'acoes']

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dialog: MatDialog) {
    this.turmaToView = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["turma"];

    console.log("TURMA", this.turmaToView.studentList.length);
  }

  ngOnInit(): void {
    localStorage.setItem('listaAlunos', JSON.stringify(this.turmaToView.studentList));
    localStorage.setItem('turmaQuestionario', JSON.stringify(this.turmaToView));
  }

  public goBackListTurma = () => {
    this.router.navigate(['turma/list']);
  }

  public viewQuestionariosTurma = () => {
    this.router.navigate([`turma/list-questionarios-turma/${this.turmaToView.id}`]);
  }

  @ViewChild(MatTable) table: MatTable<Turma>


  openDialog(): void {
    const dialogRef = this.dialog.open(StudentCreateComponent, {
      width: '800px',
      data: this.turmaToView
    });

    dialogRef.afterClosed().subscribe(result => {
      this.turmaToView.studentList = result;
      this.table.renderRows();

      //this.turmaToView.studentList.push(u);
    });
  }
  isDono() {
    let user = JSON.parse(localStorage.getItem('user_data'));
    if (user.id == this.turmaToView.mananger.id) {
      return true;
    } else {
      return false;
    }
  }

  addGrupo() {
    const dialogRef = this.dialog.open(createGrupoComponent, {
      width: '800px',
      data: this.turmaToView
    });

    dialogRef.afterClosed().subscribe(result => {
      this.turmaToView.groupList = result;
      this.table.renderRows();
    });
  }
  
  viewGrupo(grupo: Grupo) {
    this.router.navigate([`listargrupo/${grupo.id}`])
  }
  deleteGrupo(grupo: Grupo) {

  }
}
