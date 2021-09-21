import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../shared/blog-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Blog } from '../_models/blog';


@Component({
  selector: 'app-blog-by-id',
  templateUrl: './blog-by-id.component.html',
  styleUrls: ['./blog-by-id.component.css']
})
export class BlogByIdComponent implements OnInit {
  blog:Blog;
  id;


  constructor(public BlogService: BlogServiceService, public activatedRoute: ActivatedRoute, public router: Router) { }

   ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params =>{
       this.id = params.get('id');
       this.BlogService.getBlog(this.id).subscribe(res => {
        this.blog =  res['blog'];

      })
    })
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
            title: formObj.value.title,
            text: formObj.value.text,
            author: formObj.value.author
          };
        let formData = new FormData();
        let userObj = formObj.value;

        formData.append("photo", this.file);
        formData.append("title", Data.title);
        formData.append("text", Data.text);
        formData.append("author", Data.author);
        formData.append("userObj", JSON.stringify(userObj));
        console.log("formData = ",formData)
        await this.BlogService.editBlog(this.id,formData).subscribe(res =>{
          console.log(res)
        });
        await this.router.navigateByUrl("/blogs");
  }
}
