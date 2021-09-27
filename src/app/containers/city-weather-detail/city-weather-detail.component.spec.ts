import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityWeatherDetailComponent} from './city-weather-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../app-routing.module';


describe('CityWeatherDetailComponent', () => {
  let component: CityWeatherDetailComponent;
  let fixture: ComponentFixture<CityWeatherDetailComponent>;
  let container: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherDetailComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes)],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherDetailComponent);
    component = fixture.componentInstance;
    component.cityName = 'Amsterdam';
    container = fixture.nativeElement.querySelector('.city-weather-detail');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show nothing when data is not handled', () => {
    fixture.detectChanges();
    expect(container.textContent).toBe('');
  });

  it('should show only one component when weather data is handled', () => {
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
    expect(container.childElementCount).toBe(1);
  });

  it('should show only one component when forecast data is handled', () => {
    component.forecast = [
      {
        dt: '1632754800000',
        weather: [
          {
            icon: '10d',
            description: 'Light Rain'
          }
        ],
        main: {
          temp: '21.18'
        }
      }
    ];
    fixture.detectChanges();
    expect(container.childElementCount).toBe(1);
  });

  it('should show 2 components when weather data and forecast data are handled', () => {
    component.forecast = [
      {
        dt: '1632754800000',
        weather: [
          {
            icon: '10d',
            description: 'Light Rain'
          }
        ],
        main: {
          temp: '21.18'
        }
      }
    ];
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
    expect(container.childElementCount).toBe(2);
  });

});
