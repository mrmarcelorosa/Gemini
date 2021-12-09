import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Questao} from './../../model/questao';


@Component({
  selector: 'app-questaopage',
  templateUrl: './questaopage.component.html',
  styleUrls: ['./questaopage.component.scss']
})
export class QuestaopageComponent implements OnInit {
  objetivaAtivo = false;
  discursivaAtivo = false;
  escalaAtivo = false;
  simnaoAtivo = false;
  tipoQuestao: number=0;
  
  
  ngOnInit(): void {
  }

  constructor() {
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
