import {TestBed} from '@angular/core/testing';

import {CityService} from './city.service';

describe('CityService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 6 cities correctly when 6 cities exist', () => {
    service.getCities().subscribe(value => {
      expect(value.length).toBe(6);
    });
  });

  it('should return 1 cities correctly when 1 cities exist', () => {
    service.CityList = [{name: 'Amsterdam'}];
    service.getCities().subscribe(value => {
      expect(value.length).toBe(1);
    });
  });

  it('should not return cities correctly when cities not exist', () => {
    service.CityList = [];
    service.getCities().subscribe(value => {
      expect(value.length).toBe(0);
    });
  });
});
