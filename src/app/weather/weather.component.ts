import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  
  myWeather : any;
  temperature:number=0;
  FeelslikeTemp:number=0;
  Pressure:number=0;
  Humidity:number=0;
  Summary:string='';
  iconurl:string='';
  city:string='Dehradun';
  units:string='imperial';


  constructor(private weatherService:WeatherService)
  {

  }

  ngOnInit():void{

    this.weatherService.getWeather(this.city,this.units).subscribe(
    
      (res:any)=>{
        console.log(res);
        this.myWeather=res;
        console.log('weather object '+this.myWeather);
        
        this.temperature=this.myWeather.main.temp;
        this.FeelslikeTemp=this.myWeather.main.feels_like;
        this.Humidity=this.myWeather.main.humidity;
        this.Pressure=this.myWeather.main.pressure;
        this.Summary= this.myWeather.weather[0].main;
        this.iconurl='https://openweathermap.org/img/wn/'+this.myWeather.weather[0].icon+ '@2x.png';
        
      },
      
      (error:any)=>{console.log(error.message);},

      ()=>{console.log('API call completed');}

    );
  }

}

