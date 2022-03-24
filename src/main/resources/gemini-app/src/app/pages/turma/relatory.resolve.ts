import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { QuestaoService } from './../../service/questao.service';

@Injectable()
export class RelatoryResolve implements Resolve<any> {
  constructor(private questaoService: QuestaoService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let idRelatorio = route && route.params && route.params['id'];

    return new Observable((observer) => {
      this.questaoService
        .getQuestoesPorIdQuestionarioRelatorio(idRelatorio)
        .subscribe(
          (listaQuestoesRelatorio) => {
            observer.next(listaQuestoesRelatorio);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
    });
  }
}
