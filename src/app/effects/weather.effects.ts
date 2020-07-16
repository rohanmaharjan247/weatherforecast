import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';
import { LoadLocation, LoadLocations, LocationActionTypes, LocationsError } from '../actions/location.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadWeathers } from '../actions/weather.actions';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {
  @Effect()
  loadLocation$ = this.actions$.pipe(
    ofType<LoadLocations>(LocationActionTypes.LoadLocations),
    mergeMap((action) =>
      this.weatherService.getWeather(action.payload.locationData).pipe(
        map((weather) => {
          return new LoadWeathers({ weatherData: weather });
        }),
        catchError((errorMessage) =>
          of(new LocationsError({ error: errorMessage }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherService: WeatherService
  ) {}
}
