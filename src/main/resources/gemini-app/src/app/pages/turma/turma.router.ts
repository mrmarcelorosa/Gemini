import { Routes } from "@angular/router";

import { ListTurmaResolve } from "./list-turma/list-turma.resolve";
import { TurmaResolve } from "./turma.resolve";
import { ListTurmaComponent } from "./list-turma/list-turma.component";
import { ViewTurmaComponent } from "./view-turma/view-turma.component";
import { EditTurmaComponent } from "./edit-turma/edit-turma.component";
import { CreateTurmaComponent } from "./create-turma/create-turma.component"

export const TurmaRouter: Routes = [{
    path: 'create',
    component: CreateTurmaComponent
},
{
    path: 'list',
    component: ListTurmaComponent,
    resolve: {
        listTurma: ListTurmaResolve
    }
},
{
    path: 'view/:id',
    component: ViewTurmaComponent,
    resolve: {
        turma: TurmaResolve
    }
},
{
    path: 'edit/:id',
    component: EditTurmaComponent,
    resolve: {
        turma: TurmaResolve
    }
}
];