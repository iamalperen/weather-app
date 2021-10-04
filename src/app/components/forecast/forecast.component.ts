import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() hourlyForecasts!: Observable<any>;

  constructor() {
  }

  ngOnInit(): void {

    // @ts-ignore
    /*
    this.hourlyForecasts = this.hourlyForecasts?.map((forecast) => {
      const hour = parseInt(String(forecast.dt)) * 1000;
      return {...forecast, dt: hour};
    })

     */
  }

}
