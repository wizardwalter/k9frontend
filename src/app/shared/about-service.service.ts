import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor(public http : HttpClient) { }
  baseUrl = 'http://localhost:8080'

  getAbout(){
    return this.http.get(this.baseUrl + '/about');
  }
}
