import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Turma } from 'src/app/model/turma';
import { TurmaService } from 'src/app/service/turma.service';


@Component({
  selector: 'app-view-turma',
  templateUrl: './view-turma.component.html',
  styleUrls: ['./view-turma.component.scss']
})
export class ViewTurmaComponent implements OnInit {

  public turmaToView: Turma;
  public displayedColumns = ['name', 'email']
  public isLoadingDataImport  = false;
  public isLoadingRemoveStudents  = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private turmaService: TurmaService) { 
    this.turmaToView = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data["turma"];
    
    console.log("TURMA", this.turmaToView.studentList.length);
  }

  ngOnInit(): void {
  }

  public goBackListTurma = () => {
    this.router.navigate(['turma/list']);
  }

  public onImportExcelData = (data) => {
    this.isLoadingDataImport = true;
    data && data.map((student) => {
      this.turmaToView.studentList.push(student);
    })
    this.updateTurma();
   
  }

  public onRemoveExcelData = (data) => {
    this.isLoadingRemoveStudents = true
    this.turmaToView.studentList = [];
    this.updateTurma();

  }

  public updateTurma = () => {
    this.turmaService.addStudentsTurma(this.turmaToView).subscribe( 
      (insertedTurma: Turma) => {
        this.turmaToView = insertedTurma;
        this.onConclusionImportData();
      },
      (error) => {
        this.onConclusionImportData();
      });
  }

  private onConclusionImportData = () => {
    this.isLoadingDataImport = false;
    this.isLoadingRemoveStudents = false;
  }
}
