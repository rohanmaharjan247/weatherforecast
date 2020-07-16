import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather-data/weather-data';
import { LocationData } from '../models/location-data/location-data';
import { WeatherActions, WeatherActionTypes } from '../actions/weather.actions';
import { LocationActions, LocationActionTypes } from '../actions/location.actions';

export interface WeatherState{
  weatherData: WeatherData | null;
}

const initialWeatherState: WeatherState={
  weatherData:null
};

export interface LocationState{
  location: LocationData | null;
  error: string |null;
}

const initialLocationState: LocationState={
  location: null,
  error: null
}

export interface AppState {
  weather: WeatherState;
  location: LocationState;
}

export function weatherReducer(state: WeatherState = initialWeatherState, action: WeatherActions){
  switch(action.type){
    case WeatherActionTypes.LoadWeathers:
      return{
        weatherData: action.payload.weatherData
      }

      default:
        return state;
  }
}

export function locationReducer(state: LocationState = initialLocationState, action: LocationActions): LocationState{
  switch(action.type){
    case LocationActionTypes.LoadLocations:
      return{
        location: action.payload.locationData,
        error: null
      };
    case LocationActionTypes.LocationsError:
      return{
        location:null,
        error: action.payload.error
      };
      default:
        return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
    weather: weatherReducer,
    location: locationReducer    
};

export const selectWeather = (state: AppState) => state.weather.weatherData;

export const selectError = (state: AppState) => state.location.error;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
