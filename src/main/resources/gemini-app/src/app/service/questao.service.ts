import { Questao } from './../model/questao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor(private http: HttpClient) { }

  public saveQuestao(questao: Questao): Observable<any> {
    return this.http.post(environment.apiurl + '/questao/save', questao);
  }
  public getQuestoes(id: number): Observable<any> {
    return this.http.post(environment.apiurl + '/questao/getquestoes', id);
  }
  
  public getAll(): Observable<any> {
    return this.http.get(environment.apiurl + '/questao/list');
  }
  public delete(questao: Questao): Observable<any> {
    return this.http.post(environment.apiurl + '/questao/delete', questao);
  }
}
