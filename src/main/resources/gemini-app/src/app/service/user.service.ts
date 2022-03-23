import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public postUser(user: User): Observable<any> {
    return this.http.post(environment.apiurl + '/user/save', user);
  }

  public getByEmail(email: String){
    return this.http.get(environment.apiurl + '/user/get/'+email);
  }
  
}
