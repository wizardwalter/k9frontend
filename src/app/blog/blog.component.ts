import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../shared/admin-service.service';
import { BlogServiceService } from '../shared/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs;
  date;
  imageName;
  isLogin: boolean = false;

  constructor(
    public blogService: BlogServiceService,
    public adminService: AdminServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.isLogin = this.adminService.getIsAuth();
    this.blogService.getBlogs().subscribe((res) => {
      this.blogs = res['blogs'];
      this.imageName = this.blogs.image;
      console.log(res);
      this.date = this.blogs.date;
      console.log(this.blogs);
    });
  }

  deletePost(id) {
    this.blogService.deleteBlog(id).subscribe((res) => {
      console.log(res);
    });
  }
}
