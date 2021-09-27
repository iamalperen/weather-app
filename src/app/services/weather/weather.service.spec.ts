import {TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return weather value of Amsterdam', async () => {
    const amsterdam = {name: 'Amsterdam'};
    await service.getWeather(amsterdam).subscribe(weather => {
        expect(weather).not.toBeNull();
        expect(weather).toBeTruthy();
      }
    );
  });

  it('should return hourly forecast value of Amsterdam', async () => {
    const amsterdam = {name: 'Amsterdam'};
    await service.getForecast(amsterdam).subscribe(forecast => {
        expect(forecast).not.toBeNull();
        expect(forecast).toBeTruthy();
      }
    );
  });
});
