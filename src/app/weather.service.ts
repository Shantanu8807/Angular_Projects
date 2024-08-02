import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city:string,units:string):Observable<any>
  {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ab240b2ab59928f04cb51dc63d621397&units="+units);
  }
}
