import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from 'src/app/model/user';
import { Turma } from 'src/app/model/turma';
import { TurmaService } from 'src/app/service/turma.service';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/service/login.service';

@Component({
  selector: 'app-create-turma',
  templateUrl: './create-turma.component.html',
  styleUrls: ['./create-turma.component.scss']
})
export class CreateTurmaComponent implements OnInit {

  private studentList: User[];
  public turmaForm: FormGroup;

  private user: User = {
    id: null,
    name: "",
    email: "",
    password: ""
  }

  constructor(private formBuilder: FormBuilder, private turmaService: TurmaService, private router: Router, private loginUser: LoginUserService) {
    this.turmaForm = this.createFormTurma();
  }

  ngOnInit(): void {
  }

  private createFormTurma = () => {
    return this.formBuilder.group({
      name: [""],
      description:[""],
      dateCreation:[""],
      dateEnding:[""]
    })
  }

  public saveTurma = () => {
    let logedUser = this.loginUser.getLogedUserData();
    this.user = logedUser;
    let turma: Turma = this.getTurmaFromForm();
 
    this.turmaService.saveTurma(turma).subscribe(
      (result) => {
        this.goBackToList();
        console.log("SUCCESS");
      },
      () => {
        console.log("ERROR");
      }
    )
    
  }

  private getTurmaFromForm = () => {
    let name = this.turmaForm.get("name").value;
    let description = this.turmaForm.get("description").value;
    let dateCreation = this.turmaForm.get("dateCreation").value;
    let dateEnding = this.turmaForm.get("dateEnding").value;
    
    let usuario = JSON.parse(localStorage.getItem('user_data'));
    
    this.user.id = usuario['id']
    
    return {
      id: undefined,
      name: name,
      description: description,
      dateCreation: dateCreation,
      dateEnding: dateEnding,
      mananger: this.user,
      studentList: this.studentList 
    }
  }

  public goBackToList = () => {
    this.router.navigate(['turma/list/']);
  }

}
