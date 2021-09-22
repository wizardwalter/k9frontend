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

var domainName = "";
if (location.hostname !== "localhost")
    domainName = "k9-frontend.herokuapp.com/";


const routes: Routes = [
  {path: domainName + '', component: HomepageComponent},
  {path: domainName + 'blogs', component: BlogComponent},
  {path: domainName + 'dogs', component: DogsComponent},
  {path: domainName + 'dogs/:id', component: DogsByIdComponent},
  {path: domainName + 'contact', component: AboutUsComponent},
  {path: domainName + 'blogs/create', component: CreateBlogComponent},
  {path: domainName + 'admin', component: LoginComponent},
  {path: domainName +'dog/create', component:CreateDogComponent},
  {path: domainName + 'blogs/edit/:id', component: BlogByIdComponent},
  {path: domainName + 'dog/edit/:id', component: EditDogComponent},
  {path: domainName + 'donate', component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
