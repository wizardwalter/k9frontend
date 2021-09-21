import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from '../shared/about-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public aboutService: AboutServiceService) { }
  about;

  ngOnInit(): void {

}
}
