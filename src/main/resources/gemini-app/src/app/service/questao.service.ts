import { Questao } from './../model/questao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestaoService {
  apiurl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public saveQuestao(questao: Questao): Observable<any> {
    console.log(questao)
    return this.http.post(this.apiurl + '/questao/save', questao);
  }
}
