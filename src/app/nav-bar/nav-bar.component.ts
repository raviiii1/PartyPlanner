import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn:boolean = false;
  isAdmin:boolean = false;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  login(form:NgForm){
      this.isLoggedIn = this.authService.login(form.value);
      this.isAdmin = this.authService.isAdmin();
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

}
