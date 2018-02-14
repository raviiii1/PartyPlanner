import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router : Router) { }

  ngOnInit() {
  }

  login(form:NgForm){
	  if(!form.value.username || form.value.username === "")
		return false;
	  if(!form.value.password || form.value.password === "")
		return false;

      this.authService.login(form.value)
	  .subscribe(
		res => {
				let token = res.headers.get("authentication").split(" ")[1];
				this.authService.setLocalStorage(token);
              },
		err => {
                console.log("Error occured");
              }
		);
  }
  
  isLoggedIn(){
	  return this.authService.isLoggedIn();
  }
  
  isAdmin(){
	  return this.authService.isAdmin();
  }

  logout(){
    this.authService.logout();
  }

  pageChange(pageName:string){
	   this.router.navigate([pageName]);
  }
  
}
