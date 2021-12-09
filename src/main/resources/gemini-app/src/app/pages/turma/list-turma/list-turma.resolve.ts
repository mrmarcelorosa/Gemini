import { Observable } from "rxjs";
import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";

import { TurmaService } from './../../../service/turma.service';


@Injectable()
export class ListTurmaResolve implements Resolve<any> {

    constructor(private turmaService: TurmaService) { }

    resolve() {
        return new Observable( (observer) => {
            this.turmaService.listAll().subscribe(
                (turmaList)=> {
                    observer.next(turmaList);
                    observer.complete();
                }, 
                (error) => {
                    observer.error(error)
                }
            )
        })
    }

}