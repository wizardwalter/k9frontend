import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { environment } from '../_enviroment/env.js';
import { DogServiceService } from '../shared/dog-service.service';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css'],
})
export class CreateDogComponent implements OnInit {
  constructor(public dogService: DogServiceService, public router: Router) {}

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-98, 35],
      zoom: 2,
    });
    const geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: environment.mapbox.accessToken , // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false // Do not use the default marker style
    });

    // Add the geocoder to the map
    map.addControl(geocoder);

    map.on('mousemove', function (e) {
      document.getElementById('info').innerHTML = JSON.stringify(
        e.lngLat.wrap()
      );
    });

  }

  file: File;
  fileName: string = 'No Image Selected';
  imageUrl: string | ArrayBuffer =
    'https://bulma.io/images/placeholders/256x256.png';

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
  async onSubmit(formObj: NgForm) {
    let Data = {
      name: formObj.value.name,
      about: formObj.value.about,
      latitude: formObj.value.latitude,
      longtitude: formObj.value.longtitude,

    };
    let formData = new FormData();
    let dogObj = formObj.value;

    formData.append('photo', this.file);
    formData.append('name', Data.name);
    formData.append('about', Data.about);
    formData.append('latitude', Data.latitude);
    formData.append('longtitude', Data.longtitude);
    formData.append('dogObj', JSON.stringify(dogObj));
    console.log(formData);
    await this.dogService.addDog(formData).subscribe();
    await this.router.navigateByUrl('/dogs');
  }
}
