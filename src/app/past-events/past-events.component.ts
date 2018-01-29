import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  constructor(private authservice:AuthenticationService) { }

  ngOnInit() {
  }

  isAdmin(){
    return this.authservice.isAdmin();
  }

  isLoggedIn(){
    return this.authservice.isLoggedIn()
  }

}
