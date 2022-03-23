import { Observable } from "rxjs";
import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";

import { TurmaService } from './../../../service/turma.service';


@Injectable()
export class ListTurmaResolve implements Resolve<any> {
    user: any;
    constructor(private turmaService: TurmaService) { }

    resolve() {
        this.user = JSON.parse(localStorage.getItem('user_data'));
        return new Observable( (observer) => {
            this.turmaService.listAll(this.user.id).subscribe(
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