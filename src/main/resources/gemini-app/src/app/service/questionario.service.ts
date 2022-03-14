import { Observable } from 'rxjs';
import { Questionario } from './../model/questionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private http: HttpClient) { }

  public save(questionario: Questionario): Observable<any> {
    return this.http.post(environment.apiurl + '/questionario/save', questionario);
  }

  public getAll(): Observable<any> {
    return this.http.get(environment.apiurl + '/questionario/list');
  }

  public delete(questionario: Questionario): Observable<any> {
    return this.http.post(environment.apiurl + '/questionario/delete', questionario);
  }

}
