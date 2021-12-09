import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from "../model/Grupo";



@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  apiurl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public postGrupo(grupo: Grupo): Observable<any> {
    return this.http.post(this.apiurl + '/grupo/save', grupo);
  }
  public getlist(): Observable<any>{
    return this.http.get(this.apiurl+'/grupo/list');
  }
  public delete(grupo: Grupo): Observable<any> {
    return this.http.post(this.apiurl + '/grupo/delete', grupo);
  }
}
