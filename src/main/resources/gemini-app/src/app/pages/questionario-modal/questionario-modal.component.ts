import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questionario-modal',
  templateUrl: './questionario-modal.component.html',
  styleUrls: ['./questionario-modal.component.scss']
})
export class QuestionarioModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestionarioModalComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
