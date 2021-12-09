import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Questao} from './../../model/questao';
import {QuestaoService} from './../../service/questao.service';


@Component({
  selector: 'app-questaopage',
  templateUrl: './questaopage.component.html',
  styleUrls: ['./questaopage.component.scss']
})
export class QuestaopageComponent implements OnInit {
  questaoObj: Questao;
  alternativasObj: any;
  return: any;
  objetivaAtivo = false;
  discursivaAtivo = false;
  escalaAtivo = false;
  simnaoAtivo = false;
  tipoQuestao: number=0;
  
  
  ngOnInit(): void {
    this.alternativasObj = {};
    this.questaoObj= new Questao();
  }

  constructor(private questaoService: QuestaoService) {
  }

  saveQuestao (questao: Questao){
    this.mergeAlternativas();
    console.log(this.questaoObj);
    this.questaoService.saveQuestao(this.questaoObj).subscribe(resposta =>{
      this.return = resposta;
      alert("Questao cadastrada: "+this.return.name);
    })
  }

  mergeAlternativas(){           //juntar alternativas na String alternativas usando ; pra dividir (mudar?)
    if(this.tipoQuestao ==1){
      this.questaoObj.alternativas = this.alternativasObj.a + ";";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.b + ";";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.c + ";";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.d + ";";
      this.questaoObj.alternativas = this.questaoObj.alternativas + this.alternativasObj.e;
    }if(this.tipoQuestao == 3){
      this.questaoObj.alternativas = this.alternativasObj.a + ";";
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
