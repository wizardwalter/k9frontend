import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  windowHeight;
  windowWidth;
  ngOnInit(): void {
    console.log(window.screen.width)
    this.fillScreen()
  }

  fillScreen(){
    this.windowHeight = window.screen.height +"px";
    this.windowWidth = window.screen.width+"px";
  }
}
