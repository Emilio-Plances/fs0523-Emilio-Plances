import { PrefService } from './../../../../services/pref.service';
import { Component, Input } from '@angular/core';
import { IWeatherCity } from '../../../../Modules/iweather-city';
import { WeatherService } from '../../../../services/weather.service';
import { IGeodata } from '../../../../Modules/igeodata';
import { IPref } from '../../../../Modules/ipref';
import { LogSystemService } from '../../../../services/log-system.service';
import { IUserAuth } from '../../../../Modules/iuser-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-city',
  templateUrl: './info-city.component.html',
  styleUrl: './info-city.component.scss'
})
export class InfoCityComponent {

  @Input() prefArr!:IPref[]|undefined
  cityGeodata!:IGeodata;
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
  alreadyPreferred!: boolean;
  pref:IPref={
    geodataCity: undefined,
    weatherCity: undefined,
    IDUser: `0`,
  }


  constructor(
    private router:Router,
    private WeatherS:WeatherService,
    private PrefS:PrefService,
    private LSS:LogSystemService
  ){
  }

  ngOnInit(){
    this.LSS.user$.subscribe(user=>this.loggedUser=user);
    this.LSS.booleanUser$.subscribe(user =>{
      this.logged=!!user;
    });

    this.WeatherS.citySelectedGeoData$.subscribe(geodata=>{

      this.cityGeodata=geodata;
      this.cityName=geodata.local_names?.it ? geodata.local_names?.it:geodata.name
      this.cityCountry=geodata.country;
      this.cityState=geodata.state;
      this.prefArr?.forEach(element=>{
        if(element.geodataCity?.name===geodata.name){
          this.alreadyPreferred=true;
        }
      })
    })

    this.WeatherS.citySelectedWeather$.subscribe(city=>{
      if(!city)return;
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
    if(!this.logged){
      alert(`Non hai effettuato l'accesso!`);
      this.router.navigate([`/LogSystem/login`])
      return;
    }
    this.pref.IDUser=this.loggedUser?.user.id;
    this.PrefS.addPreference(this.pref).subscribe(()=>this.alreadyPreferred=true)
  }

  removePref(){
    this.prefArr?.forEach(element=>{
      if(element.IDUser==this.loggedUser?.user.id && element.geodataCity?.name==this.cityGeodata.name){
        if(!element.id) return;
        console.log(`ciao`);

        this.PrefS.deletePreference(element.id).subscribe(()=>{
          this.alreadyPreferred=false;
          let index:number|undefined=this.prefArr?.indexOf(element)
          if(!index) return;
          this.prefArr?.splice(index,1);
        })
      }
    })
  }
}
