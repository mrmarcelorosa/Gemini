import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { GrupoModalComponent } from '../grupo-modal/grupo-modal.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Turma } from 'src/app/model/turma';

@Component({
  selector: 'app-listargrupo',
  templateUrl: './listargrupo.component.html',
  styleUrls: ['./listargrupo.component.scss']
})


export class ListargrupoComponent implements OnInit {


  listgrupo:Array<any>=[];
  listaAlunosTurma: Array<Turma>
  editando: any;
  grupo: Grupo = new Grupo();
  public displayedColumns = ['name', 'email']
  constructor(private service:GrupoService,private dialog: MatDialog, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.grupo.id = params['id']);
  }

  @Inject(MAT_DIALOG_DATA) public data: any
  
  ngOnInit(): void {
    this.listaAlunosTurma = JSON.parse(localStorage.getItem('listaAlunos'));
    console.log(this.listaAlunosTurma)
    this.service.getGrupoById(this.grupo.id).subscribe( data =>{
      this.grupo = data;
    })


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
  openDialog(): void {
    const dialogRef = this.dialog.open(GrupoModalComponent, {
      width: '800px',
      data: {
        dataKey:this.grupo, lista: this.listaAlunosTurma
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

  isDono(){
    return true;
  }
}
