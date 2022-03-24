import { ChartData } from './ChartData';
import { User } from './user';

export class ChartQuestion {
  constructor(public title?: string, public labels?: string[], public chartData?: ChartData[], public typeGraph?: Number, public chartDataPie?: number[]) {}
}
