import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { QuestComponent } from './pages/quest/quest.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SecurityInterceptor } from './security/security.interceptor';
import { InitialComponent } from './pages/initial/initial.component';
import { QuestaopageComponent } from './pages/questaopage/questaopage.component';
import { createGrupoComponent } from './pages/creategrupo/creategrupo.component';
import { ListargrupoComponent } from './pages/listargrupo/listargrupo.component';
import { QuestaolistComponent } from './pages/questaolist/questaolist.component';
import { SimpleMessageComponent } from './pages/simple-message/simple-message.component';
import { QuestaoModalComponent } from './pages/questao-modal/questao-modal.component';
import { QuestionarioModalComponent } from './pages/questionario-modal/questionario-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    InitialComponent,
    QuestionarioModalComponent,
    QuestComponent,
    QuestaopageComponent,
    createGrupoComponent,
    ListargrupoComponent,
    QuestaolistComponent,
    QuestaoModalComponent,
    FooterComponent,
    SimpleMessageComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
