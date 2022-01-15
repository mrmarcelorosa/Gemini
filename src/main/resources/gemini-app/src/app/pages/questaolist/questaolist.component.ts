import { QuestaoModalComponent } from './../questao-modal/questao-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {QuestaoService} from './../../service/questao.service';
import { Questao } from 'src/app/model/questao';

@Component({
  selector: 'app-questaolist',
  templateUrl: './questaolist.component.html',
  styleUrls: ['./questaolist.component.scss']
})
export class QuestaolistComponent implements OnInit {
  questaoList: Array<any> = [];
  alternativas2: Array<any>;
  alternativasEditando: any;
  editando: boolean = false;
  questaoAtual: Questao = new Questao();
  constructor(private dialog: MatDialog, private questaoService: QuestaoService) { }

  ngOnInit(): void {
    this.getAll();
    this.alternativasEditando = {};
  }

  getAll() {
    this.questaoService.getQuestoes(parseInt(localStorage.getItem('id_questionario'))).toPromise().then(data => {
      this.questaoList = data;
      console.log(data);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestaoModalComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.getAll();
    });
  }

  delete(questao: Questao) {
    console.log("Delete")
    if (confirm("Deseja excluir")) {
      this.questaoService.delete(questao).toPromise().then(data => {
        alert("Questão removida com sucesso!")
        this.getAll();
      })
    } else {

    }
  }
  onEditar(questao: Questao){
      this.editando = true;
      this.questaoAtual =  questao;
      if(this.questaoAtual.tipo_alternativa!=0){
        this.separarQuestoes(questao.alternativas);
        this.mergeAlternativasAntes();
      }
  }
  cancelarEdicao(){
    this.editando = false;
  }
  separarQuestoes(a: String){
    let toArray = a.toString().split("*_*-*");
    this.alternativas2 = toArray;
  }
  mergeAlternativasAntes(){           //juntar alternativas antes de clicar em concluido no modo edição pra mostrar na tela
    if(this.questaoAtual.tipo_alternativa ==1){
      this.alternativasEditando.a = this.alternativas2[0];
      this.alternativasEditando.b = this.alternativas2[1];
      this.alternativasEditando.c = this.alternativas2[2];
      this.alternativasEditando.d = this.alternativas2[3];
      this.alternativasEditando.e = this.alternativas2[4];
    }if(this.questaoAtual.tipo_alternativa == 3){
      this.alternativasEditando.a = this.alternativas2[0];
      this.alternativasEditando.b = this.alternativas2[1];
    }
  }

  mergeAlternativas(){           //juntar alternativas na String alternativas usando *_*-* pra dividir
    if(this.questaoAtual.tipo_alternativa ==1){
      this.questaoAtual.alternativas = this.alternativasEditando.a + "*_*-*";
      this.questaoAtual.alternativas = this.questaoAtual.alternativas + this.alternativasEditando.b + "*_*-*";
      this.questaoAtual.alternativas = this.questaoAtual.alternativas + this.alternativasEditando.c + "*_*-*";
      this.questaoAtual.alternativas = this.questaoAtual.alternativas + this.alternativasEditando.d + "*_*-*";
      this.questaoAtual.alternativas = this.questaoAtual.alternativas + this.alternativasEditando.e;
    }if(this.questaoAtual.tipo_alternativa == 3){
      this.questaoAtual.alternativas = this.alternativasEditando.a + "*_*-*";
      this.questaoAtual.alternativas = this.questaoAtual.alternativas + this.alternativasEditando.b;
    }
  }
  saveQuestao(questao: Questao){
    this.mergeAlternativas();
    
    this.questaoService.saveQuestao(this.questaoAtual).subscribe(resposta =>{
      alert("Questao Editada com sucesso: "+resposta.name);
      this.cancelarEdicao();
    })
  }

}
