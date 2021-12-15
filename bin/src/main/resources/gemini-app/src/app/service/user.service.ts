import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public postUser(user: User): Observable<any> {
    return this.http.post(this.apiurl + '/user/save', user);
  }
  
}
