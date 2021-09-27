import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityWeatherDetailComponent} from './city-weather-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from '../../app-routing.module';
import {IconMapPipe} from "../../pipes";

describe('CityWeatherDetailComponent', () => {
  let component: CityWeatherDetailComponent;
  let fixture: ComponentFixture<CityWeatherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherDetailComponent, IconMapPipe],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
