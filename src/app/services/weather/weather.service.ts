import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {City} from "../../models";

const API_URL = environment.apiURL;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(city: City, units = 'metric') {
    return this.http.get(API_URL + 'weather?units=' + units + '&appid=' + API_KEY + '&q=' + city.name);
  }

  getForecast(city: City, units = 'metric') {
    return this.http.get(API_URL + 'forecast?units=' + units + '&appid=' + API_KEY + '&q=' + city.name);
  }

}
