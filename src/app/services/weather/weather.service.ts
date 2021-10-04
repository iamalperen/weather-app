import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {City, Forecast, Weather} from "../../models";
import {map} from "rxjs/operators";
import {switchMap, toArray} from "rxjs/internal/operators";
import {from, Observable, of} from "rxjs";

const API_URL = environment.apiURL;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(city: City, units = 'metric'): Observable<Weather> {
    return this.http.get(API_URL + 'weather?units=' + units + '&appid=' + API_KEY + '&q=' + city.name).pipe(
      switchMap((res: any) => of({
        name: res.name,
        icon: res.weather[0].icon,
        description: res.weather[0].description,
        temp: res.main.temp,
        humidity: res.main.humidity,
        feelsLike: res.main.feels_like,
        tempMax: res.main.temp_max,
        tempMin: res.main.temp_min,
        windSpeed: res.wind.speed
      }))
    );
  }

  getForecast(city: City, units = 'metric') : Observable<Forecast[]>{
    return this.http.get(API_URL + 'forecast?units=' + units + '&appid=' + API_KEY + '&q=' + city.name).pipe(
      map((res: any) => res.list),
      switchMap(val => from(val)),
      map((forecast: any) => ({
          dt: parseInt(String(forecast.dt)) * 1000,
          icon: forecast.weather[0].icon,
          temp: forecast.main.temp
        })
      ),
      toArray(),
    );
  }

}
