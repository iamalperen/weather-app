import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CityWeatherCardListComponent} from "./containers";

const routes: Routes = [
  {
    path: '',
    component: CityWeatherCardListComponent,
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
