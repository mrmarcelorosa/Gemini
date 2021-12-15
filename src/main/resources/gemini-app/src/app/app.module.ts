import { QuestionarioModalComponent } from './pages/questionario-modal/questionario-modal.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InitialComponent } from './pages/initial/initial.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { QuestComponent } from './pages/quest/quest.component';
import { QuestaopageComponent } from './pages/questaopage/questaopage.component';
import { createGrupoComponent } from './pages/creategrupo/creategrupo.component';
import { ListargrupoComponent } from './pages/listargrupo/listargrupo.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    InitialComponent,
    QuestionarioModalComponent,
    QuestComponent,
    InitialComponent,
    QuestaopageComponent,
    createGrupoComponent,
    ListargrupoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
