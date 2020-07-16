import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data/weather-data';
import { Observable } from 'rxjs';
import { AppState, selectWeather } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent implements OnInit {

  data$: Observable<WeatherData>;
  displayedColumns: string[] = ['Time', 'Temp', 'Wind', 'Condition'];

  // @Input()
  // set weatherData(weatherData: WeatherData) {
  //   this.data = weatherData || null;
  // }

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
      this.data$ = this.store.pipe(select(selectWeather));
  }
}
