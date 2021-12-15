import { Observable } from 'rxjs';
import { Questionario } from './../model/questionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private http: HttpClient) { }
  apiurl = "http://localhost:8080";

  public save(questionario: Questionario): Observable<any> {
    return this.http.post(this.apiurl + '/questionario/save', questionario);
  }

  public getAll(): Observable<any> {
    return this.http.get(this.apiurl + '/questionario/list');
  }

  public delete(questionario: Questionario): Observable<any> {
    return this.http.post(this.apiurl + '/questionario/delete', questionario);
  }

}
