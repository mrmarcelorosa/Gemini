import { QuestionarioService } from './../../service/questionario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Questionario } from 'src/app/model/questionario';

@Component({
  selector: 'app-questionario-modal',
  templateUrl: './questionario-modal.component.html',
  styleUrls: ['./questionario-modal.component.scss']
})
export class QuestionarioModalComponent implements OnInit {

  questForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<QuestionarioModalComponent>, private service:QuestionarioService) { }

  ngOnInit(): void {
    this.createform(new Questionario())
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createform(user: Questionario) {
    this.questForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name),
      turmaId: new FormControl(user.turmaId),
    })
  }

  confirm(){

  }

}
