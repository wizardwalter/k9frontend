import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DogServiceService } from '../shared/dog-service.service';
import { environment } from '../_enviroment/env.js';
import * as mapboxgl from 'mapbox-gl';
import { Dog } from '../_models/dogModel';
import { AdminServiceService } from '../shared/admin-service.service';

@Component({
  selector: 'app-dogs-by-id',
  templateUrl: './dogs-by-id.component.html',
  styleUrls: ['./dogs-by-id.component.css']
})
export class DogsByIdComponent implements OnInit {
  dog: Dog;
  id;
  lat: number;
  lng: number;
  map: mapboxgl.Map;
  isLogin: boolean = false;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(public activatedRoute: ActivatedRoute, public dogService: DogServiceService, public adminService: AdminServiceService, public router: Router) { }
// have to figure out why the map does not appear on init?
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.dogService.getDog(this.id).subscribe(res => {
        this.dog = res['dog'];
        this.lng = this.dog.coordinates.longtitude;
        this.lat = this.dog.coordinates.latitude;
        this.map = new mapboxgl.Map({
          accessToken: environment.mapbox.accessToken,
          container: 'map',
          style: this.style,
          zoom: 5,
          center: [this.dog.coordinates.longtitude, this.dog.coordinates.latitude],

          });
          // Add map controls
          this.map.addControl(new mapboxgl.NavigationControl());
          new mapboxgl.Marker()
        .setLngLat([this.dog.coordinates.longtitude, this.dog.coordinates.latitude])
        .addTo(this.map); // add the marker to the map
          console.log(this.dog);
      })
    })
    this.isLogin = this.adminService.getIsAuth();
  }

  deleteDog(id){
    this.dogService.deleteDog(id).subscribe(res =>{
      alert('Dog was successfully deleted');
    })
    this.router.navigateByUrl("/dogs");
  }


}
