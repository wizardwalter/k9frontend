import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { environment } from '../_enviroment/env.js';
import { DogServiceService } from '../shared/dog-service.service';
import { Dog } from '../_models/dogModel.js';
import { AdminServiceService } from '../shared/admin-service.service.js';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css'],
})
export class EditDogComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public dogService: DogServiceService,
    public adminService: AdminServiceService,
    public router: Router
  ) {}

  id;
  dog: Dog;

  map: mapboxgl.Map;
  isLogin: boolean = false;
  style = 'mapbox://styles/mapbox/streets-v11';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.dogService.getDog(this.id).subscribe((res) => {
        this.dog = res['dog'];
        this.map = new mapboxgl.Map({
          accessToken: environment.mapbox.accessToken,
          container: 'map',
          style: this.style,
          zoom: 5,
          center: [
            this.dog.coordinates.longtitude,
            this.dog.coordinates.latitude,
          ],
        });
        const geocoder = new MapboxGeocoder({

          accessToken: environment.mapbox.accessToken ,
          mapboxgl: mapboxgl,
          marker: false
        });

        // Add the geocoder to the map
        this.map.addControl(geocoder);

        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
        new mapboxgl.Marker()
          .setLngLat([
            this.dog.coordinates.longtitude,
            this.dog.coordinates.latitude,
          ])
          .addTo(this.map);
          this.map.on('mousemove', function (e) {
            document.getElementById('info').innerHTML = JSON.stringify(
              e.lngLat.wrap()
            );
          });
      });
    });

    this.isLogin = this.adminService.getIsAuth();
  }

  file: File;
  fileName: string = "No Image Selected";
  imageUrl: string | ArrayBuffer = "https://bulma.io/images/placeholders/256x256.png";

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      }

    }
  };
    async onSubmit(formObj: NgForm) {
      let Data = {
            name: formObj.value.name,
            about: formObj.value.about,
            latitude: formObj.value.latitude,
            longtitude: formObj.value.longtitude
          };
        let formData = new FormData();
        let dogObj = formObj.value;

        formData.append("photo", this.file);
        formData.append("name", Data.name);
        formData.append("about", Data.about);
        formData.append("latitude", Data.latitude);
        formData.append("longtitude", Data.longtitude);
        formData.append("userObj", JSON.stringify(dogObj));
        console.log("formData = ",formData)
        await this.dogService.editDog(this.id,formData).subscribe();
        await this.router.navigateByUrl("/dogs");
  }

}
