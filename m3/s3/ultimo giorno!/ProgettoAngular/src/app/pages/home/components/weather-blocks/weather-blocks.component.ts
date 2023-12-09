import { Component, Input } from '@angular/core';
import { IList } from '../../../../Modules/iweather-city';

@Component({
  selector: 'app-weather-blocks',
  templateUrl: './weather-blocks.component.html',
  styleUrl: './weather-blocks.component.scss'
})
export class WeatherBlocksComponent {
  @Input() weather!:IList

  selectPicture(weather:string){
    let output!:string;
    switch(weather){
      case `Clear`:
        output="../../../../../assets/sunny-weather-Icon.png";
        break;
      case `Rain`:
        output="../../../../../assets/rain-weather-Icon.png";
        break;
      case `Clouds`:
        output="../../../../../assets/cloudy-weather-Icon.png";
        break;
      default:
        output="";
        break;
    }
    return output;
  }
}
