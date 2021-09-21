import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogByIdComponent } from './blog-by-id/blog-by-id.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { CreateDogComponent } from './create-dog/create-dog.component';
import { DogsByIdComponent } from './dogs-by-id/dogs-by-id.component';
import { DogsComponent } from './dogs/dogs.component';
import { DonateComponent } from './donate/donate.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'dogs/:id', component: DogsByIdComponent},
  {path: 'contact', component: AboutUsComponent},
  {path: 'blogs/create', component: CreateBlogComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'dog/create', component:CreateDogComponent},
  {path: 'blogs/edit/:id', component: BlogByIdComponent},
  {path: 'dog/edit/:id', component: EditDogComponent},
  {path: 'donate', component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
