import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Modules/iregister';
import { ILogin } from '../Modules/ilogin';
import { Observable} from 'rxjs';
import { IUserAuth } from '../Modules/iuser-auth';


@Injectable({
  providedIn: 'root'
})
export class LogSystemService {

  constructor(private http:HttpClient){}

  APIRegister:string=`${environment.API}/register`;
  APILogin:string=`${environment.API}/login`;

  register(user:IRegister):Observable<IUserAuth>{
    return this.http.post<IUserAuth>(this.APIRegister,user)
  }

  login(user:ILogin):Observable<IUserAuth>{
    return this.http.post<IUserAuth>(this.APILogin,user)
  }
}
