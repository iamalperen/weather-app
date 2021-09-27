import {Component, Input, OnInit} from '@angular/core';
import {City, Weather} from "../../models";
import {WeatherService} from "../../services";

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss']
})
export class CityWeatherCardComponent implements OnInit {
  @Input() city!: City;
  public weather!: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    // Getting weather of city
    this.weatherService.getWeather(this.city).subscribe((weather: any) => {this.weather = weather;});
  }

}
