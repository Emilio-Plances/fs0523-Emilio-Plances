import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { IPref } from '../Modules/ipref';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefService {

  constructor(
    private http:HttpClient
  ){}

  APIPref:string=`${environment.API}/prefCities`;

  getPreference():Observable<IPref[]>{
    return this.http.get<IPref[]>(this.APIPref)
  }

  getPreferenceID(prefID:number):Observable<IPref>{
    return this.http.get<IPref>(`${this.APIPref}/${prefID}`)
  }

  addPreference(pref:IPref):Observable<IPref>{
    return this.http.post<IPref>(this.APIPref,pref)
  }

  deletePreference(prefID:number):Observable<IPref[]>{
    return this.http.get<IPref[]>(`${this.APIPref}/${prefID}`)
  }
}
