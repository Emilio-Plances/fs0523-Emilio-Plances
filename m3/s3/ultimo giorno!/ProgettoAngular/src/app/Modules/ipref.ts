import { IGeodata } from "./igeodata";
import { IWeatherCity } from "./iweather-city";

export interface IPref {
  geodataCity:IGeodata|undefined,
  weatherCity:IWeatherCity|undefined,
  IDUser:string|undefined
  id?:number|undefined
}
