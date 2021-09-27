import {Component, OnInit} from '@angular/core';
import {City} from 'src/app/models';
import {CityService} from 'src/app/services/city/city.service';

@Component({
  selector: 'app-city-weather-card-list',
  templateUrl: './city-weather-card-list.component.html',
  styleUrls: ['./city-weather-card-list.component.scss']
})
export class CityWeatherCardListComponent implements OnInit {
  public cityList: City[] = [];

  constructor(private cityService: CityService) {
    // Fetching all cities from service
    cityService.getCities().subscribe((cityList) => {
      this.cityList = cityList;
    });
  }

  ngOnInit(): void {
  }

}
