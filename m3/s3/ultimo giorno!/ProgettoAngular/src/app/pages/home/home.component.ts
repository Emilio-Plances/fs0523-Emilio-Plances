import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { IGeodata } from '../../Modules/igeodata';
import { IList, IWeatherCity } from '../../Modules/iweather-city';
import { LogSystemService } from '../../services/log-system.service';
import { IPref } from '../../Modules/ipref';
import { IUserAuth } from '../../Modules/iuser-auth';
import { PrefService } from '../../services/pref.service';

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
  loggedUser!:IUserAuth|null;
  userPrefArr!:IPref[]|undefined;
  logged!:boolean;

  constructor(
    private WeatherS:WeatherService,
    private LSS:LogSystemService,
    private PrefS:PrefService
  ){}

  ngOnInit(){
    this.LSS.user$.subscribe(user=>this.loggedUser=user);
    this.LSS.booleanUser$.subscribe(user =>{
      this.logged=!!user;
    });
    if(this.logged&&this.loggedUser){
      this.PrefS.getPreferencesByUserID(this.loggedUser.user.id).subscribe(data=>this.userPrefArr=data)
    }
  }

  submit(){
    if(this.city==``) return
    this.WeatherS.getGeoData(this.city).subscribe(data =>{
      this.searchDone=true;
      this.foundCities=data;
    })
  }

  getWeather(city:IGeodata){
    this.choosenCity=city
    this.searchDone=false;
    this.citySelected=true;

    let cityName=city.local_names?.it? city.local_names?.it:city.name
    this.city=`${cityName},${city.country},${city.state}`;

    this.WeatherS.getWeather(city).subscribe(data =>{
      this.weatherList=data.list;
    })
  }

}
