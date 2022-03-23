import { Component, OnInit } from '@angular/core';
import { QuestaoService } from 'src/app/service/questao.service';
import { RespostaService} from 'src/app/service/resposta.service';
import {Resposta} from 'src/app/model/resposta'
import {Grupo} from 'src/app/model/Grupo'
import {User} from 'src/app/model/user'
import { Router } from '@angular/router';
import { QuestionarioService } from 'src/app/service/questionario.service';

@Component({
  selector: 'app-responder-quest',
  templateUrl: './responder-quest.component.html',
  styleUrls: ['./responder-quest.component.scss']
})
export class ResponderQuestComponent implements OnInit {
  questaoList: Array<any> = [];
  alternativas: Array<any>;
  respostaList: Array<Resposta> = [];
  nomeQuestionario: string;
  constructor(private questaoService: QuestaoService, private respostaService: RespostaService, private questionarioService: QuestionarioService,
     private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.questaoService.getQuestoes(parseInt(localStorage.getItem('id_questionario'))).toPromise().then(data => {
      this.questaoList = data;
      if(this.questaoList){
        this.questionarioService.getQuestionarioById(this.questaoList[0].idquest).toPromise().then(data =>{
          let questionario = data;
          this.nomeQuestionario = questionario.name;
        });
      }
      for(let questao of data){
        let respostaVazia: Resposta = new Resposta;
        respostaVazia.questao = questao;
        //respostaVazia.grupo = new Grupo;
        //respostaVazia.grupo.id = ;
        //respostaVazia.student = new User;
        //respostaVazia.student.id = ;
        this.respostaList.push(respostaVazia);
      }
    })
  }
  separarQuestoes(a: String){
    let toArray = a.toString().split("*_*-*");
    this.alternativas = toArray;
  }
  responderQuestao(textoIdQuestao: string, resposta: string){
    let idQuestao: number = parseInt(textoIdQuestao);
    for(let i = 0; i < this.respostaList.length; i++){
      if(this.respostaList[i].questao.id == idQuestao){
        this.respostaList[i].resposta = resposta;
        console.log(this.respostaList[i]);
      }
    }
  }
  salvarRespostas(){
    let validar: boolean = false;
    for(let i = 0; i < this.respostaList.length; i++){
      if(this.respostaList[i].resposta !=null && this.respostaList[i].resposta != ""){
        validar = true;
      }else{
        validar = false;
      }
    }
    if(validar){
      this.respostaService.saveRespostas(this.respostaList).subscribe(data => {
        console.log(data);
        console.log(this.respostaList);
        alert("Resposta enviada!")
        this.router.navigate(["/questionario"]);
      })
    }else{
      alert("Por favor preencha todas as questões do questionário");
    }
    
  }
}
