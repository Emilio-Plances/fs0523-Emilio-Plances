import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';
import { LogSystemService } from './services/log-system.service';
import { IUserAuth } from './Modules/iuser-auth';
import { IPref } from './Modules/ipref';
import { PrefService } from './services/pref.service';
import { IGeodata } from './Modules/igeodata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProgettoAngular';
  logged!:boolean;
  show!:boolean;
  loggedUser!:IUserAuth|null;
  userPrefArr!:IPref[]|undefined;


  constructor(
    private LSS:LogSystemService,
    private PrefS:PrefService,
    private WeatherS:WeatherService
  ){
    this.PrefS.cityPreferred$.subscribe(data=>this.userPrefArr?.push(data))

  }

  ngOnInit(){
    this.LSS.booleanUser$.subscribe(user =>this.logged = user)
    this.LSS.user$.subscribe(user=>this.loggedUser=user);

    if(this.logged&&this.loggedUser){
      this.PrefS.getPreferencesByUserID(this.loggedUser.user.id).subscribe(data=>this.userPrefArr=data)
    }
  }
  search(geodata:IGeodata|undefined){
    if(!geodata) return
    this.WeatherS.getWeather(geodata).subscribe()
  }

  removePref(id:number|undefined){
    if(!id) return
    this.PrefS.deletePreference(id).subscribe(()=>{
      this.userPrefArr=this.userPrefArr?.filter(element=>element.id!=id);
    })
  }
}

