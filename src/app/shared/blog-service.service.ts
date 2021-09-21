import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  constructor(public http: HttpClient, public router: Router) {}
  baseUrl = 'http://localhost:8080';

  getBlogs() {
    console.log('connected');
    return this.http.get(this.baseUrl + '/blogs');
  }

  getBlog(id) {
    console.log(id);
    return this.http.get<{
      _id: string;
      title: string;
      text: string;
      author: string;
    }>(this.baseUrl + '/blogs/' + id);
  }

  // addBlog(title: string, text: string, author: string, image:string, formData){
  //   const blogData = {
  //     title: title,
  //     text: text,
  //     author: author,
  //     image: image,
  //   }
  //   this.http.post<{message: string, blog: Blog}>(this.baseUrl + "/blogs/create", blogData, formData)
  //   .subscribe((responseData)=>{
  //     this.router.navigate(['/']);
  //   })
  // };

  addBlog(userObj): Observable<any> {
    return this.http.post(this.baseUrl + '/blogs/create', userObj);
  };

  editBlog(id, userObj): Observable<any>{
    return this.http.put(this.baseUrl + '/blogs/' + id, userObj)
  };

  deleteBlog(id){
    return this.http.delete(this.baseUrl + '/blogs/' + id);
  };
}
