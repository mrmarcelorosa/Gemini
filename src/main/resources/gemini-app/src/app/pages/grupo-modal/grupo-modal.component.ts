import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-grupo-modal',
  templateUrl: './grupo-modal.component.html',
  styleUrls: ['./grupo-modal.component.scss']
})
export class GrupoModalComponent implements OnInit {

  constructor(private service:GrupoService,private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
 ) { }

 listgrupo:Array<any>=[];
 grupo: Grupo = new Grupo();

 ngOnInit() {
  this.service.getlist().toPromise().then(data=>{
    this.listgrupo=data;
  })
  document.getElementById("a").textContent=this.data.nome
}
editar(){
  this.grupo.id=this.data.id;
  this.grupo.id_turma=this.data.id_turma;
  this.grupo.nome=document.getElementById("a").textContent;
  const queryString = window.location.search;
  this.service.postGrupo(this.grupo).toPromise().then(data=>{
    alert("Edição realizada com sucesso!")
    this.service.getlist().toPromise().then(data=>{
      this.listgrupo=data;
      window.location.reload();
    })
  })
  
}
}
