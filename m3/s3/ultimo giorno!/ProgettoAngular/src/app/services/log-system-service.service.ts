import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Modules/iregister';
import { ILogin } from '../Modules/ilogin';
import { Observable } from 'rxjs';
import { IUserAuth } from '../Modules/iuser-auth';

@Injectable({
  providedIn: 'root'
})
export class LogSystemServiceService {

  APIRegister=`${environment.API}/register`;
  APILogin=`${environment.API}/login`;

  constructor(private http:HttpClient){}

  register(user:IRegister):Observable<IUserAuth>{
    return this.http.post<IUserAuth>(`${this.APIRegister}`,user)
  }

  login(user:ILogin):Observable<IUserAuth>{
    return this.http.post<IUserAuth>(`${this.APILogin}`,user)
  }
}
