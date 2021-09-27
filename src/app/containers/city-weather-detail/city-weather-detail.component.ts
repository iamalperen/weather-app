import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {City, Forecast, Weather} from "../../models";
import {WeatherService} from "../../services";

@Component({
  selector: 'app-city-weather-detail',
  templateUrl: './city-weather-detail.component.html',
  styleUrls: ['./city-weather-detail.component.scss']
})
export class CityWeatherDetailComponent implements OnInit {
  public cityName: string;
  public weather!: Weather;
  public forecast!: Forecast[];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router: Router) {
    this.cityName = <string>route.snapshot.paramMap.get('cityName');
  }

  ngOnInit(): void {
    const city: City = {name: this.cityName};

    // Getting weather of city
    this.weatherService.getWeather(city).subscribe(
      (weather: any) => {this.weather = weather;},
      () => {this.router.navigate(['/'])}
    );

    // Getting forecast of city
    this.weatherService.getForecast(city).subscribe(
      (forecast: any) => {this.forecast = forecast.list;},
      () => {this.router.navigate(['/']);}
    );

  }

}
