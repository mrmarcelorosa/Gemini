import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from "../model/Grupo";
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  public postGrupo(grupo: Grupo): Observable<any> {
    return this.http.post(environment.apiurl + '/grupo/save', grupo);
  }
  public getlist(): Observable<any>{
    return this.http.get(environment.apiurl +'/grupo/list');
  }
  public delete(grupo: Grupo): Observable<any> {
    return this.http.post(environment.apiurl + '/grupo/delete', grupo);
  }
  public getGrupoById(id: number): Observable<any> {
    return this.http.get(`${environment.apiurl}/grupo/get/${id}`)
  }
}
