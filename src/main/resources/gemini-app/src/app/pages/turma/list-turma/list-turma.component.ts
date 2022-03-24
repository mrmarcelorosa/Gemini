import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Turma } from 'src/app/model/turma';
import { User } from 'src/app/model/user';
import { TurmaService } from 'src/app/service/turma.service';

@Component({
  selector: 'app-list-turma',
  templateUrl: './list-turma.component.html',
  styleUrls: ['./list-turma.component.scss']
})
export class ListTurmaComponent implements OnInit {

  public listTurma: Turma[];
  public displayedColumns: string[] = ['name', 'dateCreation', 'dateEnding', 'actions'];
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private turmaService: TurmaService) {
    this.listTurma = this.getTurmaList();  
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user_data'));
  }

  public getTurmaList() {
    return this.activatedRoute.snapshot.data["listTurma"]
  }


  public viewTurma(turma: any){
    this.router.navigate([`turma/view/${turma.id}`])
  }

  public listStudent(turma: any){
    this.router.navigate([`turma/student/${turma.id}`])
  }

  public editTurma(turma: any){
    this.router.navigate([`turma/edit/${turma.id}`])
  }

  public deleteTurma = (turma: any) => {
    this.turmaService.deleteTurma(turma.id).subscribe(
      (result) => {
        console.log("SUCCESS");
        this.refreshList();
      },
      (error) => {
        console.log("ERROR")
      }
    );
  } 

  private refreshList = () => {
    this.turmaService.listAll(this.user.id).subscribe(
      (updatedListTurma) => {
        this.listTurma = updatedListTurma;
      },
      (error) => {
        console.log("ERROR")
      }
    )
  }

  isDono(turma: Turma){
    if(this.user.id == turma.mananger.id){
      return true;
    }else{
      return false;
    }
  }

  public createTurma() {
    this.router.navigate([`turma/create`]);
  }

}
