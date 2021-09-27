import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components';
import {CityWeatherCardListComponent} from './containers';
import {CityWeatherCardComponent} from './components';
import { IconMapPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityWeatherCardListComponent,
    CityWeatherCardComponent,
    IconMapPipe
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
