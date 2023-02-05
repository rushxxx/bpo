import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITown } from './app.component';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

export interface IWeather {
 name: string,
  main: {
   temp: number
  }
  wind: {
   deg: number,
    speed: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _url = 'https://api.openweathermap.org/data/2.5/weather?'

  constructor(private readonly _http: HttpClient) {}

  public getWeather(town: ITown): Observable<IWeather> {
    return this._http
      .get(`${this._url}id=${town.id}&lang=ru&appid=${environment.API_KEY}&units=metric`)
      .pipe(map((weather: IWeather) => weather))
  };
}
