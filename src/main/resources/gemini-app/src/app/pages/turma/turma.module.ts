import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TurmaRouter } from './turma.router';
import { TurmaResolve } from './turma.resolve';
import { ListTurmaResolve } from './list-turma/list-turma.resolve';
import { ListTurmaComponent } from './list-turma/list-turma.component';
import { ViewTurmaComponent } from './view-turma/view-turma.component';
import { EditTurmaComponent } from './edit-turma/edit-turma.component';
import { CreateTurmaComponent } from './create-turma/create-turma.component';
import { ImportAlunosTurmaComponent } from './view-turma/import-alunos-turma/import-alunos-turma.component';


@NgModule({
  declarations: [
    CreateTurmaComponent,
    ListTurmaComponent,
    ViewTurmaComponent,
    EditTurmaComponent,
    ImportAlunosTurmaComponent
  ],
  imports: [
    FormsModule,
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
    MatProgressSpinnerModule,
    RouterModule.forChild(TurmaRouter)
  ],
  providers: [  
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    DatePipe,
    TurmaResolve,
    ListTurmaResolve,
    MatDatepickerModule  
  ],
})
export class TurmaModule {
  constructor() {
  }
 }

