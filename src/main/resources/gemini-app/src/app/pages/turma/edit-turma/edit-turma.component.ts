import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/model/user';
import { Turma } from 'src/app/model/turma';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from 'src/app/service/turma.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-turma',
  templateUrl: './edit-turma.component.html',
  styleUrls: ['./edit-turma.component.scss']
})
export class EditTurmaComponent implements OnInit {

  private turmaToEdit: Turma;
  public turmaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private turmaService: TurmaService, private router: Router, private datePipe: DatePipe) { 
    this.turmaToEdit = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["turma"];
    this.turmaForm = this.initializeTurmaForm();
  }

  ngOnInit(): void {
  }

  private initializeTurmaForm = () => {
    return this.formBuilder.group({
      name: [this.turmaToEdit.name],
      description: [this.turmaToEdit.description],
      dateCreation: [this.getFormatedData(this.turmaToEdit.dateCreation).toISOString()],
      dateEnding: [this.getFormatedData(this.turmaToEdit.dateEnding).toISOString()]
    })
  }

  private getUpdatedTurma = () => {
    let name = this.turmaForm.get("name").value;
    let description = this.turmaForm.get("description").value;
    let dateCreation = this.turmaForm.get("dateCreation").value;
    let dateEnding = this.turmaForm.get("dateEnding").value;

    return {
      id: this.turmaToEdit.id,
      name: name,
      description: description,
      dateCreation: dateCreation,
      dateEnding: dateEnding,
      mananger: this.turmaToEdit.mananger,
      studentList: this.turmaToEdit.studentList, 
      groupList: this.turmaToEdit.groupList
    }
  }

  public updateTurma = () => {
    this.turmaToEdit = this.getUpdatedTurma();
    this.turmaService.updateTurma(this.turmaToEdit).subscribe(
      (result) => {
        console.log("SUCCESS");
      },
      (error) => {
        console.log("ERROR");
      }
    );
  }

  public cancel = () => {
    this.router.navigate(['turma/list/']);
  }

  public editTurma(turma: any){
    this.router.navigate([`turma/list/${turma.id}`])
  }

  private getFormatedData(dateToFormat: string):Date {
    let formattedDate = new Date(dateToFormat);
    formattedDate.setMinutes( formattedDate.getMinutes() + formattedDate.getTimezoneOffset() );

    return formattedDate;
  }

}
