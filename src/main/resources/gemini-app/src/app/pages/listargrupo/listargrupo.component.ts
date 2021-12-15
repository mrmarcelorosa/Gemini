import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { GrupoService } from 'src/app/service/grupo.service';

@Component({
  selector: 'app-listargrupo',
  templateUrl: './listargrupo.component.html',
  styleUrls: ['./listargrupo.component.scss']
})
export class ListargrupoComponent implements OnInit {

  listgrupo:Array<any>=[];
  constructor(private service:GrupoService) { }

  ngOnInit(): void {
    this.service.getlist().toPromise().then(data=>{
      this.listgrupo=data;
    })
  }
  editar(group:Grupo){
    const queryString = window.location.search;
    
    this.service.postGrupo(group).toPromise().then(data=>{
      alert("Edição realizada com sucesso!")
      window.location.reload();
    })
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
