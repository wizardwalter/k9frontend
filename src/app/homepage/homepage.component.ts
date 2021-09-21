import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../shared/blog-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  myInterval = 2750;
  activeSlideIndex = 0;
  blogs1;
  blogs;
  date;
  image;
  text;
  title;
  isLoading: boolean = true;


  slides = [
    {image: 'https://res.cloudinary.com/walterscloudinary/image/upload/v1627436982/k9cs/photo-1627436981748.jpg', text: "Why we Raise, Train, and Donate K9s", header:"About Us", link:"http://localhost:4200/about"},
    {image: 'assets/PoliceDog850.jpg', text: "lorem ipsum blah blah blah", header: ""},
    {image: 'assets/k9-police-car.jpg', text: "lorem ipsum blah blah blah", header:""},
  ];
  constructor(public blogService: BlogServiceService ) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
    async res=> {
      this.blogs1 = await res['blogs'];
      this.blogs = await this.blogs1.slice(this.blogs1.length - 3, this.blogs1.length);
      this.isLoading = await false;
    })
  }
}
