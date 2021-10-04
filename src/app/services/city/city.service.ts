import {Injectable} from '@angular/core';
import {CityList} from "../../constants";
import {City} from "../../models";
import {Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  CityList: City[];

  constructor() {
    this.CityList = CityList;
  }

  /**
   * Mocking client-server API
   */
  public getCities(): Observable<City[]> {
    return new Observable<City[]>((observer: Observer<City[]>) => {
      observer.next(this.CityList);
      observer.complete();
    });
  }
}
