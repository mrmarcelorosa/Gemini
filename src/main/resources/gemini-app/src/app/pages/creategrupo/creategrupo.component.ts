import { GrupoService } from '../../service/grupo.service';
import { Grupo } from "../../model/Grupo";
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Turma } from 'src/app/model/turma';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TurmaService } from 'src/app/service/turma.service';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Turma, private service:GrupoService, 
  public dialogRef: MatDialogRef<createGrupoComponent>, private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.createform(new Grupo())
  }

  createform(grupo: Grupo) {
    this.grupoForm = new FormGroup({
      id: new FormControl(grupo.id),
      nome: new FormControl(grupo.nome),
    })
  }

  matcher = new MyErrorStateMatcher();

  confirm(){
    let grupo = new Grupo()
    this.grupoForm.controls['id'].value? grupo.id = this.grupoForm.controls['id'].value: null;
    grupo.nome = this.grupoForm.controls['nome'].value
    grupo.groupStudent = [];
    console.log(grupo);
    this.service.postGrupo(grupo).subscribe(data=>{
      if(data){
        this.data.groupList.push(data);
        this.turmaService.updateTurma(this.data).subscribe(date1=>{
          this.dialogRef.close(this.data.groupList);
        })
        alert("Cadastro realizado com sucesso!");
      }else{
        alert("Ocorreu um erro!");
      }
    },)
  }

}
