import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() hourlyForecasts!: Forecast[];

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.hourlyForecasts = this.hourlyForecasts?.map((forecast) => {
      const hour = parseInt(String(forecast.dt)) * 1000;
      return {...forecast, dt: hour};
    })
  }

}
