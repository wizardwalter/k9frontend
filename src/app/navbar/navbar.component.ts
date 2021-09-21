import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin;
  logoHeight;
  logoWidth;
  constructor(public adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.islogin = this.adminService.getIsAuth();
    window.onclick = (event)=>
{
  if (!event.target.matches('.hamburger_icon'))
  {

    var dropdowns = document.getElementsByClassName("user-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
     {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  }

  logout(){
    this.adminService.logout();
    window.location.reload();
  }

  UserDropdown()
{
    document.getElementById("UserContent").classList.toggle("show");
}


}
