import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { IGeodata } from '../../Modules/igeodata';
import { IList, IWeatherCity } from '../../Modules/iweather-city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  city:string =``;
  searchDone:boolean=false;
  citySelected:boolean=false;
  foundCities!:IGeodata[];
  weatherList!:IList[];
  choosenCity!:IGeodata;


  constructor(
    private WeatherS:WeatherService
  ){}

  submit(){
    if(this.city==``) return
    this.WeatherS.getGeoData(this.city).subscribe(data =>{
      this.searchDone=true;
      this.foundCities=data;
      console.log(data)
    })
  }

  getWeather(city:IGeodata){
    this.choosenCity=city
    this.searchDone=false;
    this.citySelected=true;

    let cityName=city.local_names?.it? city.local_names?.it:city.name
    this.city=`${cityName},${city.country},${city.state}`;

    this.WeatherS.getWeather(city.lat,city.lon).subscribe(data =>{
      this.weatherList=data.list;
      console.log(data)
    })
  }
}
