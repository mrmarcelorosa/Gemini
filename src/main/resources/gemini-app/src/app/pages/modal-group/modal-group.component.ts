import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-group',
  templateUrl: './modal-group.component.html',
  styleUrls: ['./modal-group.component.scss']
})
export class ModalGroupComponent implements OnInit {

  listAlunos: Array<any>=[];
  grupo: Grupo = new Grupo();
  alunoSelecionado: any;
  nomeAlunoSelecionado: string;

  constructor(private service:GrupoService,private dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.listAlunos = this.data.lista;
    this.grupo = JSON.parse(localStorage.getItem('grupoClick'));
  }

  alternarAluno(aluno: any){
    this.alunoSelecionado = aluno;
  }

  salvarAluno(){
    if(this.nomeAlunoSelecionado == this.alunoSelecionado.name){
      this.listAlunos.push(this.alunoSelecionado);
      this.grupo.groupStudent = this.listAlunos;
      console.log("aqui3", this.grupo)
      this.service.postGrupo(this.grupo).subscribe(date1=>{
        console.log(date1)
        this.dialogRef.close(this.grupo.groupStudent);
      })
    }
  }
}
