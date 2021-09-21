import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../shared/admin-service.service';
import { BlogServiceService } from '../shared/blog-service.service';
import { Admin } from '../_models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public adminService: AdminServiceService, public router: Router) {}


  ngOnInit(): void {}

 onSubmit(form: NgForm) {
   this.adminService.login(form.value.email, form.value.password)
  }
}
