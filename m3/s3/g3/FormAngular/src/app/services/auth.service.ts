import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../pages/login-system/Modules/ilogin';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IAuthUser } from '../pages/login-system/Modules/iauth-user';
import { IRegister } from '../pages/login-system/Modules/iregister';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt:JwtHelperService=new JwtHelperService();
  authorized=new BehaviorSubject<IAuthUser|null>(null);
  user$=this.authorized.asObservable()
  userBoolean$=this.user$.pipe(map(user=>!!user))

  constructor(private http:HttpClient,
    private router:Router) {
    this.logged()
  }

  API:string=`http://localhost:3000`;

  loginAPI:string=`${this.API}/login`;
  registerAPI:string=`${this.API}/register`;

  logged(){
    let localLogin:string|null=localStorage.getItem('user');
    if (!localLogin) return;
    let oldAuth:IAuthUser=JSON.parse(localLogin);
    if(this.jwt.isTokenExpired(oldAuth.accessToken)) return
    this.authorized.next(oldAuth);
  }

  register(data:IRegister):Observable<IAuthUser>{
    return this.http.post<IAuthUser>(this.registerAPI,data)
  }

  login(data:ILogin):Observable<IAuthUser>{
    return this.http.post<IAuthUser>(this.loginAPI,data).pipe(tap(authData=>{
      this.authorized.next(authData);
      console.log(this.user$);
      localStorage.setItem('user',JSON.stringify(authData))
    }))
  }

  logOut(){
    localStorage.removeItem('user');
    this.authorized.next(null);
    this.router.navigate(['/']);
  }
}
