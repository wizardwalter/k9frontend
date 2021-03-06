import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../shared/admin-service.service';
import { BlogServiceService } from '../shared/blog-service.service';

@Component({
  selector: 'app-oneblog',
  templateUrl: './oneblog.component.html',
  styleUrls: ['./oneblog.component.css']
})
export class OneblogComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public blogService: BlogServiceService, public adminService: AdminServiceService, public router: Router) { }
  id;
  blog;
  isLogin: boolean = false;
  isLoading: boolean = true
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.blogService.getBlog(this.id).subscribe(async res =>{
        this.blog = res['blog'];
        this.isLogin =this.adminService.getIsAuth()
        this.isLoading = await false;
      })
  }
    )}

    deletePost(id) {
      this.blogService.deleteBlog(id).subscribe((res) => {
        this.router.navigateByUrl('/blogs');
      });
    }
}
