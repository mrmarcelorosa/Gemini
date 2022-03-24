import { Resposta } from '../model/resposta';

export class QuestaoDTO {
  constructor(
    public id: Number,
    public idquest: Number,
    public name: string,
    public alternativas: string,
    public resposta: string,
    public tipo_alternativa: Number,
    public listaRespostasQuestao: Resposta[]
  ) {}
}
