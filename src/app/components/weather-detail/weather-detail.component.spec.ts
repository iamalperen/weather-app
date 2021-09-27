import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDetailComponent} from './weather-detail.component';
import {IconMapPipe} from "../../pipes";

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailComponent,IconMapPipe]
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

  it('should show the city name correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const cityName = weatherDetail.querySelector('.weather-detail__city')!;
    expect(cityName.textContent).toContain('Amsterdam');
  });

  it('should show weather icon correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const detailIcon = weatherDetail.querySelector('.weather-detail__icon i')!;
    const pipe = new IconMapPipe();
    const mappedIcon = pipe.transform('04d');
    // @ts-ignore
    expect(detailIcon.classList.toString()).toContain(mappedIcon);
  });

  it('should show the description correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const description = weatherDetail.querySelector('.weather-detail__description')!;
    expect(description.textContent).toContain('Partly Cloudy');
  });

  it('should show the temp correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const temp = weatherDetail.querySelector('.weather-detail__current-temp')!;
    expect(temp.textContent).toContain('25.2');
  });

  it('should show the humidity correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const humidity = weatherDetail.querySelectorAll('.weather-detail__extra-item-value')[2];
    expect(humidity.textContent).toContain('58');
  });

  it('should show the feels_like correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const feels_like = weatherDetail.querySelectorAll('.weather-detail__extra-item-value')[0];
    expect(feels_like.textContent).toContain('28');
  });

  it('should show the temp_max correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const temp_max = weatherDetail.querySelector('.weather-detail__min-temp')!;
    expect(temp_max.textContent).toContain('19');
  });

  it('should show the temp_min correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const temp_min = weatherDetail.querySelector('.weather-detail__max-temp')!;
    expect(temp_min.textContent).toContain('29');
  });

  it('should show the wind correctly', () => {
    const weatherDetail: HTMLElement = fixture.nativeElement;
    const wind = weatherDetail.querySelectorAll('.weather-detail__extra-item-value')[1];
    expect(wind.textContent).toContain('2.3');
  });

});
