import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDetailComponent} from './weather-detail.component';

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
