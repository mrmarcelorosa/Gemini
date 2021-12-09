import { GrupoService } from '../../service/grupo.service';
import { Grupo } from "../../model/Grupo";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-grupo',
  templateUrl: './createGrupo.component.html',
  styleUrls: ['./createGrupo.component.scss']
})
export class createGrupoComponent implements OnInit {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  grupoForm: FormGroup;

  constructor(private service:GrupoService) { }

  ngOnInit(): void {
    this.createform(new Grupo())
  }

  createform(grupo: Grupo) {
    this.grupoForm = new FormGroup({
      id: new FormControl(grupo.id),
      id_turma: new FormControl(grupo.id_turma),
      nome: new FormControl(grupo.nome),
    })
  }

  matcher = new MyErrorStateMatcher();

  confirm(){
    let grupo = new Grupo()
    this.grupoForm.controls['id'].value? grupo.id = this.grupoForm.controls['id'].value: null;
    grupo.id_turma = this.grupoForm.controls['id_turma'].value
    grupo.nome = this.grupoForm.controls['nome'].value
    console.log(grupo);
    this.service.postGrupo(grupo).toPromise().then(data=>{
      alert("Cadastro realizado com sucesso!")
    })
  }

}
