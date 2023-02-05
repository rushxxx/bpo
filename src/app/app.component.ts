import { Component } from '@angular/core';
import { IWeather, WeatherService } from './weather.service';

export interface ITown {
  id: number,
  name: string
  isActive: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'BPO';
  public activeTown: number;
  public towns: ITown[] = [
    {id: 524894, name: 'Москва', isActive: false},
    {id: 498817, name: 'Санкт-Петербург', isActive: false},
    {id: 1486209, name: 'Екатеринбург', isActive: false},
    {id: 2013348, name: 'Владивосток', isActive: false}
  ];
  public currentWeather: IWeather;

  constructor(private _weatherService: WeatherService) {
  }

  public loadWeather(id: number): void {
    this._weatherService.getWeather(this.towns[id])
      .subscribe(data => {
        this.currentWeather = data;
        this.activeTown = id;
      })
  }
}
