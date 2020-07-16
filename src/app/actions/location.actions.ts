import { Action } from '@ngrx/store';
import { LocationData } from '../models/location-data/location-data';

export enum LocationActionTypes {
  LoadLocations = '[Location] Load Locations',
  LocationsError = '[Location] Locations Error'
  
}

export class LoadLocation implements Action{
  type:string;
  payload:{
    locationData: LocationData,
    error:string
  }
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LoadLocations;
  constructor(readonly payload: {locationData: LocationData}){

  }
}

export class LocationsError implements Action{
  readonly type = LocationActionTypes.LocationsError;

  constructor(readonly payload: {error:string}){

  }

}


export type LocationActions = LoadLocations | LocationsError;
