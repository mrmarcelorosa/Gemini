import { Injectable } from '@angular/core';
import { Resposta } from './../model/resposta';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  public saveRespostas(respostaList: Array<Resposta>): Observable<any> {
    return this.http.post(environment.apiurl + '/resposta/save/list', respostaList);
  }  
  public getAll(): Observable<any> {
    return this.http.get(environment.apiurl + '/reposta/list');
  }

  constructor(private http: HttpClient) { }
}
