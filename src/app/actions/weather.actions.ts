import { Action } from '@ngrx/store';
import { WeatherData } from '../models/weather-data/weather-data';

export enum WeatherActionTypes {
  LoadWeathers = '[Weather] Load Weathers',
  
  
}

export class WeatherAction implements Action{
  type: string;
  payload:{
    weatherData: WeatherData
  }
}

export class LoadWeathers implements Action {
  readonly type = WeatherActionTypes.LoadWeathers;

  constructor(readonly payload: {weatherData:WeatherData}){
    
  }
}


export type WeatherActions = LoadWeathers;
