import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { QuestionarioService } from "./../../../service/questionario.service";

@Injectable()
export class ListQuestionariosTurmaResolve implements Resolve<any> {

    constructor(private questionarioService: QuestionarioService) { }

    resolve(route: ActivatedRouteSnapshot) {
        let idTurma = route && route.params && route.params["idTurma"];

        return new Observable( (observer) => {
            this.questionarioService.getQuestionariosByTurmaId(idTurma).subscribe(
                (turma)=> {
                    observer.next(turma);
                    observer.complete();
                }, 
                (error) => {
                    observer.error(error)
                }
            )
        })
    }

}