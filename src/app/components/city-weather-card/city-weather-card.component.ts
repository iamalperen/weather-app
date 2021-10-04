import {Component, Input, OnInit} from '@angular/core';
import {City, Weather} from "../../models";
import {WeatherService} from "../../services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss']
})
export class CityWeatherCardComponent implements OnInit {
  @Input() city!: City;
  public weather!: Observable<Weather>;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    // Getting weather of city
    this.weather = this.weatherService.getWeather(this.city);
  }

}
