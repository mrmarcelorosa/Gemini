import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { TurmaRouter } from './turma.router';
import { TurmaResolve } from './turma.resolve';
import { RelatoryResolve } from './relatory.resolve';
import { ListTurmaResolve } from './list-turma/list-turma.resolve';
import { ListTurmaComponent } from './list-turma/list-turma.component';
import { ViewTurmaComponent } from './view-turma/view-turma.component';
import { EditTurmaComponent } from './edit-turma/edit-turma.component';
import { CreateTurmaComponent } from './create-turma/create-turma.component';
import { ListQuestionariosTurmaResolve } from './listar-questionarios-turma/list-questionarios-turma.resolve';
import { ListarQuestionariosTurmaComponent } from './listar-questionarios-turma/listar-questionarios-turma.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { RelatoryQuestTurmaComponent } from './listar-questionarios-turma/relatory-quest-turma/relatory-quest-turma.component';


@NgModule({
  declarations: [
    CreateTurmaComponent,
    ListTurmaComponent,
    ViewTurmaComponent,
    EditTurmaComponent,
    StudentCreateComponent,
    RelatoryQuestTurmaComponent,
    ListarQuestionariosTurmaComponent,
  ],
  imports: [
    FormsModule,
    ChartsModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(TurmaRouter)
  ],
  providers: [  
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    DatePipe,
    TurmaResolve,
    RelatoryResolve,
    ListTurmaResolve,
    MatDatepickerModule,
    ListQuestionariosTurmaResolve
  ],
})
export class TurmaModule {
  constructor() {
  }
 }

