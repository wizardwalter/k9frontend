import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BlogComponent } from './blog/blog.component';
import { BlogByIdComponent } from './blog-by-id/blog-by-id.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsByIdComponent } from './dogs-by-id/dogs-by-id.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CloudinaryModule,
  CloudinaryConfiguration,
} from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { LoginComponent } from './login/login.component';
import { LoginInterceptor } from './login/login-interceptor';
import { CreateDogComponent } from './create-dog/create-dog.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { FooterComponent } from './footer/footer.component';
import { DonateComponent } from './donate/donate.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BlogComponent,
    BlogByIdComponent,
    DogsComponent,
    DogsByIdComponent,
    AboutUsComponent,
    CreateBlogComponent,
    LoginComponent,
    CreateDogComponent,
    EditDogComponent,
    FooterComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'walterscloudinary',
    } as CloudinaryConfiguration)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

