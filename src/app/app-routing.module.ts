import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CityWeatherCardListComponent, CityWeatherDetailComponent} from "./containers";

export const routes: Routes = [
  {
    path: '',
    component: CityWeatherCardListComponent,
  },
  {
    path: 'weather/:cityName',
    component: CityWeatherDetailComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
