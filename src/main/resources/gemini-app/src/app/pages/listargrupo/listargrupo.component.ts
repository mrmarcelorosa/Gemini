import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { MatDialog } from '@angular/material/dialog';
import { GrupoModalComponent } from '../grupo-modal/grupo-modal.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-listargrupo',
  templateUrl: './listargrupo.component.html',
  styleUrls: ['./listargrupo.component.scss']
})


export class ListargrupoComponent implements OnInit {

  listgrupo:Array<any>=[];
  editando: any;
  grupo: Grupo = new Grupo();
  constructor(private service:GrupoService,private dialog: MatDialog) { }

  @Inject(MAT_DIALOG_DATA) public data: any
  
  ngOnInit(): void {
    this.service.getlist().toPromise().then(data=>{
      this.listgrupo=data;
    })
    this.editando = {};
    console.log(this.data)
  }
  
  editar(group:Grupo){

    /*const queryString = window.location.search;
    this.service.postGrupo(group).toPromise().then(data=>{
      alert("Edição realizada com sucesso!")
      this.service.getlist().toPromise().then(data=>{
        this.listgrupo=data;
        window.location.reload();
      })
    })*/
    
  }
  openDialog(id,id_turma,nome): void {
    const dialogRef = this.dialog.open(GrupoModalComponent, {
      width: '800px',
      data: {
        dataKey:id,id,id_turma,nome
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  excluir(group:Grupo){
    this.service.delete(group).toPromise().then(data=>{
      alert("Exclusão realizada com sucesso!")
      window.location.reload();
    })
  }
  /*confirm(){
    let grupo = new Grupo()
    this.grupoForm.controls['id'].value? grupo.id = this.grupoForm.controls['id'].value: null;
    grupo.id_turma = this.grupoForm.controls['id_turma'].value
    grupo.nome = this.grupoForm.controls['nome'].value
    console.log(grupo);
    this.service.postGrupo(grupo).toPromise().then(data=>{
      alert("Cadastro realizado com sucesso!")
    })
  }*/

}
