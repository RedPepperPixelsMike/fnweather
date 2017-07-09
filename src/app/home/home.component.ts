import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from "../weather-service.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  address: String;
  lat: String;
  long: String;

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
  }

  getWeather(form: NgForm) {
    let address = form.value.place;

    this.weatherService.getGeoCodeAddress(address)
      .subscribe(
        data => {
          this.address = data.address;
          this.lat = data.lat;
          this.long = data.long;
        },
        error => console.error(error)
      );
  }



}
