import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Turma } from './../model/turma';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private endpointTurma = `${environment.apiurl}/turma`

  constructor(private http: HttpClient) { }

  public saveTurma(turma: Turma): Observable<any> {
    return this.http.post(`${this.endpointTurma}/save`, turma);
  }

  public listAll(idUser: number): Observable<any> {
    return this.http.get(`${this.endpointTurma}/listAll/` + idUser);
  }

  public getTurma(id): Observable<any> {
    return this.http.get(`${this.endpointTurma}/get/${id}`)
  }

  public updateTurma(turma: Turma) {
    return this.http.put(`${this.endpointTurma}/update`, turma);
  }

  public deleteTurma = (id) => {
    return this.http.delete(`${this.endpointTurma}/delete/${id}`);
  } 
  
}
