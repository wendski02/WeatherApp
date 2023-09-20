import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherTemp: any
  weatherIcon: any
  weatherDetails: any
  cityName = ""
  name = ""
  todayDate = new Date()
  loading = true
  defaultCity = 'Manado';

  constructor(public httpClient: HttpClient){
    this.loadData()
  }
  
  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main']
      this.name = results['name']
      this.weatherDetails = results['weather'][0]
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
      this.loading = false
      console.log(this.weatherTemp);
      console.log(this.weatherDetails);
    })
  }

}