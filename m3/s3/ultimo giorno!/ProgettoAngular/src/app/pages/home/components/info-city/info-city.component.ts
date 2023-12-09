import { PrefService } from './../../../../services/pref.service';
import { Component, Input } from '@angular/core';
import { IWeatherCity } from '../../../../Modules/iweather-city';
import { WeatherService } from '../../../../services/weather.service';
import { IGeodata } from '../../../../Modules/igeodata';
import { IPref } from '../../../../Modules/ipref';
import { LogSystemService } from '../../../../services/log-system.service';
import { IUserAuth } from '../../../../Modules/iuser-auth';

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
  cityCountry!:string;
  cityState!:string;
  logged!:boolean;
  loggedUser!:IUserAuth|null;
  pref:IPref={
    geodataCity: undefined,
    weatherCity: undefined,
    IDUser: `0`
  }


  constructor(
    private WeatherS:WeatherService,
    private PrefS:PrefService,
    private LSS:LogSystemService
  ){}

  ngOnInit(){
    this.LSS.booleanUser$.subscribe(user =>this.logged=!!user)
    this.LSS.user$.subscribe(user=>this.loggedUser=user)

    this.WeatherS.citySelectedWeather$.subscribe(city=>{
      if(!city)return;
      this.cityName=this.cityGeodata.local_names?.it? this.cityGeodata.local_names?.it:this.cityGeodata.name
      this.cityCountry=this.cityGeodata.country;
      this.cityState=this.cityGeodata.state;
      this.weatherCity=city;
      this.population=city.city.population;
      this.humidity=city.list[0].main.humidity;
      this.tempMax=Math.round(city.list[0].main.temp_max-273);
      this.tempMin=Math.floor(city.list[0].main.temp_min-273);
    })
  }

  addPref(){
    if(!this.weatherCity && !this.cityGeodata) return;
    this.pref.geodataCity=this.cityGeodata;
    this.pref.weatherCity=this.weatherCity;

    if(this.logged)
    this.pref.IDUser=this.loggedUser?.user.id;
    this.PrefS.addPreference(this.pref).subscribe(data=>console.log(data)
    )
  }
}
