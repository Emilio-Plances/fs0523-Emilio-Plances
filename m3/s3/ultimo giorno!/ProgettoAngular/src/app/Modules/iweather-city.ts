export interface IWeatherCity {
  cod: string
  message: number
  cnt: number
  list: IList[]
  city: ICity
}

export interface IList {
  dt: number
  main: IMain
  weather: IWeather[]
  clouds: IClouds
  wind: IWind
  visibility: number
  pop: number
  rain?: IRain
  sys: ISys
  dt_txt: string
}

export interface ICity {
  id: number
  name: string
  coord: ICoord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface IClouds {
  all: number
}

interface IWind {
  speed: number
  deg: number
  gust: number
}

interface IRain {
  "3h": number
}

interface ISys {
  pod: string
}

interface ICoord {
  lat: number
  lon: number
}
