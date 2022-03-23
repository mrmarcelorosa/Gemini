import { QuestionarioModalComponent } from './../questionario-modal/questionario-modal.component';
import { QuestaoModalComponent } from './../questao-modal/questao-modal.component';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Questao} from './../../model/questao';
import {QuestaoService} from './../../service/questao.service';


@Component({
  selector: 'app-questaopage',
  templateUrl: './questaopage.component.html',
  styleUrls: ['./questaopage.component.scss']
})
export class QuestaopageComponent implements OnInit {
  questaoObj: Questao = new Questao();
  alternativasObj: any;
  return: any;
  objetivaAtivo = false;
  discursivaAtivo = false;
  escalaAtivo = false;
  simnaoAtivo = false;
  tipoQuestao: number=0;
  idQuestionario:number = parseInt(localStorage.getItem('id_questionario'));
  teste: any;
  
  
  ngOnInit(): void {
    this.alternativasObj = {};
  }

  constructor(private questaoService: QuestaoService, public dialogRef: MatDialogRef<QuestionarioModalComponent>) {
  }

  close(): void {
    this.dialogRef.close();
    console.log(this.teste);
  }

  saveQuestao (){
    this.mergeAlternativas();
    this.questaoObj.idquest = this.idQuestionario;
     this.questaoService.saveQuestao(this.questaoObj).subscribe(resposta =>{
       this.return = resposta;
       alert("Questao cadastrada: "+this.return.name);
       this.close();
     })
  }

  mergeAlternativas(){           //juntar alternativas na String alternativas usando ; pra dividir (mudar?)
    if(this.tipoQuestao ==1){
      this.questaoObj.alternativas = this.alternativasObj.a + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.b + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.c + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.d + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.e;
    }
    if(this.tipoQuestao ==2){
      this.questaoObj.alternativas = "1.0" + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + "2.0" + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + "3.0" + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + "4.0" + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + "5.0";
    }
    if(this.tipoQuestao == 3){
      this.questaoObj.alternativas = this.alternativasObj.a + "*_*-*";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.b;
    }
    this.questaoObj.tipo_alternativa = this.tipoQuestao;
  }

  onObjetivaAtivo(ativo: boolean){
    this.objetivaAtivo= ativo;
    this.tipoQuestao = 1;
    this.discursivaAtivo= false;
    this.escalaAtivo = false;
    this.simnaoAtivo = false;
  }
  onDiscursivaAtivo(ativo: boolean){
    this.discursivaAtivo= ativo;
    this.tipoQuestao = 0;
    this.objetivaAtivo= false;
    this.escalaAtivo = false;
    this.simnaoAtivo = false;
  }
  onEscalaAtivo(ativo: boolean){
    this.escalaAtivo= ativo;
    this.tipoQuestao = 2;
    this.objetivaAtivo= false;
    this.discursivaAtivo = false;
    this.simnaoAtivo = false;
  }
  onSimnaoAtivo(ativo: boolean){
    this.simnaoAtivo= ativo;
    this.tipoQuestao = 3;
    this.objetivaAtivo= false;
    this.escalaAtivo = false;
    this.discursivaAtivo = false;
  }
}
