import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CityWeatherCardListComponent} from './city-weather-card-list.component';

describe('CityWeatherCardListComponent', () => {
  let component: CityWeatherCardListComponent;
  let fixture: ComponentFixture<CityWeatherCardListComponent>;
  let container: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityWeatherCardListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherCardListComponent);
    component = fixture.componentInstance;
    container = fixture.nativeElement.querySelector('.city-weather-cards-list');
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show cities', () => {
    component.cityList = [{name: 'Amsterdam'}];
    fixture.detectChanges();
    expect(container.childElementCount).toBe(1);
  });

  it('should not show error message if there is any city(s)', () => {
    component.cityList = [{name: 'Amsterdam'}];
    fixture.detectChanges();
    expect(container.textContent).not.toContain('No City Found!')
  });

  it('should error message', () => {
    component.cityList = [];
    fixture.detectChanges();
    expect(container.textContent).toContain('No City Found!')
  });

});
