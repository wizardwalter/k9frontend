import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BlogServiceService } from '../shared/blog-service.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  private blogId: string;
  blog: Blog;
  isLoading: boolean;





  constructor(public route: ActivatedRoute, public blogService: BlogServiceService, public router: Router) { }

  ngOnInit(): void {

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
      console.log("Data: ",Data)
    // let formData = new FormData();
    // let userObj = formObj.value;

    // // formData.append("photo", this.file);
    // formData.append("title", Data.title);
    // formData.append("text", Data.text);
    // formData.append("author", Data.author);
    // formData.append("userObj", JSON.stringify(userObj));
    // console.log('formdata: ',formData)
    await this.blogService.addBlog(Data).subscribe();
    await this.router.navigateByUrl("/blogs");
  }
}
