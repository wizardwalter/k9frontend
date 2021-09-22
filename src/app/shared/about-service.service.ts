import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor(public http : HttpClient) { }
  baseUrl = 'https://k9cs-backend.herokuapp.com'

  getAbout(){
    return this.http.get(this.baseUrl + '/about');
  }
}
