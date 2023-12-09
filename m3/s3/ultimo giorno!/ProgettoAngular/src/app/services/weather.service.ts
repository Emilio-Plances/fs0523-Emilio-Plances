import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGeodata } from '../Modules/igeodata';
import { IWeatherCity } from '../Modules/iweather-city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}

  KEY:string=`48a439792976e29661584c00419eb394`;

  getGeoData(city:string):Observable<IGeodata[]>{
    let geodataURL:string=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${this.KEY}`;
    return this.http.get<IGeodata[]>(geodataURL);
  }

  getWeather(lat:number,lon:number){
    let weatherURL:string=`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.KEY}`;
    return this.http.get<IWeatherCity>(weatherURL);
  }
}
