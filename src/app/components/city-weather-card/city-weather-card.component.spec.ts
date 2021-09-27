import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityWeatherCardComponent} from './city-weather-card.component';
import {HttpClientModule} from "@angular/common/http";
import { IconMapPipe } from 'src/app/pipes';

describe('CityWeatherCardComponent', () => {
  let component: CityWeatherCardComponent;
  let fixture: ComponentFixture<CityWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherCardComponent, IconMapPipe],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherCardComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherCardComponent);
    component = fixture.componentInstance;
    component.city = {name: 'Amsterdam'};
    component.weather = {
      name: "Amsterdam",
      weather: [
        {
          icon: '04d',
          description: 'Partly Cloudy'
        }
      ],
      main: {
        temp: "25.2",
        humidity: "58",
        feels_like: "28",
        temp_max: "29",
        temp_min: "19"
      },
      wind: {
        speed: 2.3
      }
    };
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should show the city name correctly', () => {
    const cityCard: HTMLElement = fixture.nativeElement;
    const cityName = cityCard.querySelector('.weather-card__city')!;
    expect(cityName.textContent).toContain('Amsterdam');
  });

  it('should show the temp degree correctly', () => {
    const cityCard: HTMLElement = fixture.nativeElement;
    const temp = cityCard.querySelector('.degree')!;
    expect(temp.textContent).toContain('25.2');
  });

  it('should show the humidity correctly', () => {
    const cityCard: HTMLElement = fixture.nativeElement;
    const footerData = cityCard.querySelectorAll('.weather-card__detail-value')[0];
    expect(footerData.textContent).toContain('58');
  });

  it('should show the wind speed correctly', () => {
    const cityCard: HTMLElement = fixture.nativeElement;
    const footerData = cityCard.querySelectorAll('.weather-card__detail-value')[1];
    expect(footerData.textContent).toContain('2.3');
  });
});
