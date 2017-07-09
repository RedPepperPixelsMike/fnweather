import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WeatherServiceService {

  private geoinfo;

  constructor(private http: Http) {
  }

  getGeoCodeAddress(address) {
    let encodeAddress = encodeURIComponent(address);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'POST, GET, PATCH, DELETE, OPTIONS'
    });
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`).map((response: Response) => {
      let res = response.json();
      let address = res.results[0].formatted_address;
      let lat = res.results[0].geometry.location.lat;
      let long = res.results[0].geometry.location.lng;

      return {
        address,
        lat,
        long
      }
    })
      .catch((error: Response) => {
        return Observable.throw(error.json())
      });
  }




}
