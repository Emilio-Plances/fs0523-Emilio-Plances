import { Subject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGeodata } from '../Modules/igeodata';
import { IWeatherCity } from '../Modules/iweather-city';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}

  cityWeather= new Subject<IWeatherCity>();
  cityGeodata=  new Subject<IGeodata>()
  citySelectedWeather$= this.cityWeather.asObservable()
  citySelectedGeoData$= this.cityGeodata.asObservable()

  KEY:string=environment.APIKEY;

  getGeoData(city:string):Observable<IGeodata[]>{
    let geodataURL:string=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${this.KEY}`;
    return this.http.get<IGeodata[]>(geodataURL)
  }

  getWeather(city:IGeodata){

    this.citySelectedGeoData$.subscribe(data=>console.log(data)
    )
    let weatherURL:string=`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${this.KEY}`;
    return this.http.get<IWeatherCity>(weatherURL).pipe(tap(data=>{
      this.cityGeodata.next(city);
      this.cityWeather.next(data)
    }));
  }
}
