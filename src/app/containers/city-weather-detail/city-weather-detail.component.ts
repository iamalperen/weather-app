import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {City, Forecast, Weather} from "../../models";
import {WeatherService} from "../../services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-city-weather-detail',
  templateUrl: './city-weather-detail.component.html',
  styleUrls: ['./city-weather-detail.component.scss']
})
export class CityWeatherDetailComponent implements OnInit {
  public cityName: string;
  public weather!: Observable<Weather>;
  public forecast!: Observable<Forecast[]>;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router: Router) {
    this.cityName = <string>route.snapshot.paramMap.get('cityName');
  }

  ngOnInit(): void {
    const city: City = {name: this.cityName};

    // Getting weather of city
    this.weather = this.weatherService.getWeather(city);

    // Getting forecast of city
    this.forecast = this.weatherService.getForecast(city);
  }

}
