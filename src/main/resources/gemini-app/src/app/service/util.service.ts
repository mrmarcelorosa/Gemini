import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Resposta } from './../model/resposta';
import { QuestaoDTO } from '../DTOs/QuestaoDTO';
import { ChartData } from './../model/ChartData';
import { ChartQuestion } from './../model/ChartQuestionData';



@Injectable({
  providedIn: 'root',
})
export class UtilService {
  ALTERNATIVAS_SEPARATOR = '*_*-*';

  constructor(private http: HttpClient) {}

  public getAlternativas(questao: QuestaoDTO): any {
    return questao.alternativas.split(this.ALTERNATIVAS_SEPARATOR);
  }

  public realizarContagemRespostasPorAlternativa(questoesDTO: QuestaoDTO[]) {
    let listaChartData: ChartQuestion[] = [];

    listaChartData =
      questoesDTO &&
      questoesDTO.map((questaoDTO) => {
        let listaAlternativas = this.getAlternativas(questaoDTO);
        let charQuestionData = new ChartQuestion();
        charQuestionData.typeGraph = questaoDTO.tipo_alternativa;
        charQuestionData.labels = listaAlternativas;
        charQuestionData = this.initializaChartQuestionData(charQuestionData);
        charQuestionData.title = questaoDTO.name;
        charQuestionData = this.contarQuantasPessoasResponderamAlternativa(questaoDTO, charQuestionData);
        console.log('CHAR DATA', charQuestionData);

        return charQuestionData;
      });

    console.log('DATA QUESTOES', listaChartData);
    return listaChartData;
  }

  private getPosicaoLetraAlfabeto = (letra: String) => {
    return letra && letra.toLowerCase().charCodeAt(0) - 97;
  };

  private initializaChartQuestionData = (chartQuestionData: ChartQuestion) => {
    let listChartData: ChartData[] = [];
    chartQuestionData.chartDataPie = [];

    chartQuestionData &&
      chartQuestionData.labels.forEach((label) => {
        let chartData: ChartData = new ChartData();
        chartData.data = [0];
        chartData.label = label;
        listChartData.push(chartData);
        chartQuestionData.chartDataPie.push(0);
      });

    chartQuestionData.chartData = listChartData;
    return chartQuestionData;
  };

  private contarQuantasPessoasResponderamAlternativa = (questao: QuestaoDTO, chartQuestion: ChartQuestion) => {
    questao.listaRespostasQuestao &&
      questao.listaRespostasQuestao.forEach((resposta: Resposta) => {
        let respostaAluno = resposta && resposta.resposta;

        if (respostaAluno && resposta !== null) {
          let indexRespostaAluno = this.getPosicaoLetraAlfabeto(respostaAluno);
          let value = chartQuestion.chartData[indexRespostaAluno] && chartQuestion.chartData[indexRespostaAluno].data;
          value[0] = value[0] + 1;
          chartQuestion.chartDataPie[indexRespostaAluno] = chartQuestion.chartDataPie[indexRespostaAluno] + 1;
        }
      });

    return chartQuestion;
  };
}
