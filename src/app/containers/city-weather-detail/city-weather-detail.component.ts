import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-city-weather-detail',
  templateUrl: './city-weather-detail.component.html',
  styleUrls: ['./city-weather-detail.component.scss']
})
export class CityWeatherDetailComponent implements OnInit {
  public cityName: string;

  constructor(private route: ActivatedRoute) {
    this.cityName = <string>route.snapshot.paramMap.get('cityName');
  }

  ngOnInit(): void {
  }

}
