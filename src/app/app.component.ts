import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from './shared/admin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'k9cs';
  windowHeight;
  windowWidth;
  constructor(public adminService: AdminServiceService) {}

  ngOnInit() {
    this.adminService.autoAuthUser();
  
  }
  fillScreen(){
    this.windowHeight = window.screen.height +"px";
    this.windowWidth = window.screen.width+"px";
  }
}
