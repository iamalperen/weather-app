import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../models";

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  @Input() weather!: Weather;

  constructor() {
  }

  ngOnInit(): void {
  }

}
