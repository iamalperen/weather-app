import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent, WeatherDetailComponent, ForecastComponent} from './components';
import {CityWeatherCardListComponent, CityWeatherDetailComponent} from './containers';
import {CityWeatherCardComponent} from './components';
import {IconMapPipe} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityWeatherCardListComponent,
    CityWeatherCardComponent,
    IconMapPipe,
    CityWeatherDetailComponent,
    WeatherDetailComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
