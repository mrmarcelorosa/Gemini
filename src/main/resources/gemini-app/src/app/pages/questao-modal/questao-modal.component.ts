import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questao-modal',
  templateUrl: './questao-modal.component.html',
  styleUrls: ['./questao-modal.component.scss']
})
export class QuestaoModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestaoModalComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
