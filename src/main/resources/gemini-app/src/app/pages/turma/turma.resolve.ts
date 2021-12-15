import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { TurmaService } from "./../../service/turma.service";

@Injectable()
export class TurmaResolve implements Resolve<any> {

    constructor(private turmaService: TurmaService) { }

    resolve(route: ActivatedRouteSnapshot) {
        let idTurma = route && route.params && route.params["id"];

        return new Observable( (observer) => {
            this.turmaService.getTurma(idTurma).subscribe(
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