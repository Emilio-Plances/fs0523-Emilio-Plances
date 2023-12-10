import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IPref } from '../Modules/ipref';
import { Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefService {

  favorite=  new Subject<IPref>()
  cityPreferred$= this.favorite.asObservable()
  constructor(
    private http:HttpClient
  ){}

  APIPref:string=`${environment.API}/prefCities`;

  getPreference():Observable<IPref[]>{
    return this.http.get<IPref[]>(this.APIPref)
  }

  getPreferencesByUserID(userID:string):Observable<IPref[]|undefined>{
    return this.http.get<IPref[]>(this.APIPref).pipe(map(dataArr=>
      dataArr.filter(data=>data.IDUser==userID)
    ));
  }

  addPreference(pref:IPref):Observable<IPref>{
    return this.http.post<IPref>(this.APIPref,pref).pipe(tap(data=>this.favorite.next(data)))
  }

  deletePreference(prefID:number):Observable<IPref[]>{
    return this.http.delete<IPref[]>(`${this.APIPref}/${prefID}`)
  }
}
