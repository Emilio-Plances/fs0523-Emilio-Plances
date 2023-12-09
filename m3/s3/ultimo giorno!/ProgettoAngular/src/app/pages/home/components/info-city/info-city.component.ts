import { Component, Input } from '@angular/core';

import { IWeatherCity } from '../../../../Modules/iweather-city';
import { WeatherService } from '../../../../services/weather.service';
import { IGeodata } from '../../../../Modules/igeodata';

@Component({
  selector: 'app-info-city',
  templateUrl: './info-city.component.html',
  styleUrl: './info-city.component.scss'
})
export class InfoCityComponent {

  @Input() cityGeodata!:IGeodata;
  weatherCity!:IWeatherCity;
  cityName!:string;
  population!:number;
  humidity!:number;
  tempMax!:number;
  tempMin!:number;

  constructor(private WeatherS:WeatherService){}

  ngOnInit(){

    this.WeatherS.citySelectedWeather$.subscribe(city=>{
      if(!city)return;
      this.cityName=this.cityGeodata.local_names?.it? this.cityGeodata.local_names?.it:this.cityGeodata.name
      this.weatherCity=city;
      this.population=city.city.population;
      this.humidity=city.list[0].main.humidity;
      this.tempMax=Math.round(city.list[0].main.temp_max-273);
      this.tempMin=Math.floor(city.list[0].main.temp_min-273);
    })
  }
}
