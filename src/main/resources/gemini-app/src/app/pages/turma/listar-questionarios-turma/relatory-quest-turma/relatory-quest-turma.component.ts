import { ChartQuestion } from './../../../../model/ChartQuestionData';
import { UtilService } from './../../../../service/util.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { QuestaoDTO } from '../../../../DTOs/QuestaoDTO';
import { ChartData } from 'src/app/model/ChartData';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relatory-quest-turma',
  templateUrl: './relatory-quest-turma.component.html',
  styleUrls: ['./relatory-quest-turma.component.scss'],
})
export class RelatoryQuestTurmaComponent implements OnInit {
  public listQuestoesTurma: QuestaoDTO[];
  public listChartDataQuestoes: ChartQuestion[] = [];

  chartOptions = {
    responsive: true,
  };

  constructor(private activatedRoute: ActivatedRoute, private utilService: UtilService, private location: Location) {
    this.listQuestoesTurma = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data['questoesRelatorio'];
    this.listChartDataQuestoes = this.utilService.realizarContagemRespostasPorAlternativa(this.listQuestoesTurma);
  }

  ngOnInit(): void {
    this.listQuestoesTurma = this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data['questoesRelatorio'];
    this.listChartDataQuestoes = this.utilService.realizarContagemRespostasPorAlternativa(this.listQuestoesTurma);
  }

  public getValueQuestionsPieChar = (chartDataValues: ChartData[]) => {
    let listValues: number[] = [];

    chartDataValues.forEach((chartData: ChartData) => {
      listValues.push(chartData.data[0]);
    });
    console.log(listValues);
    return listValues;
  };

  public goBack = () => {
    this.location.back();
  };
}
