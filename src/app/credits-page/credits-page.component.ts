import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits-page',
  templateUrl: './credits-page.component.html',
  styleUrls: ['./credits-page.component.css']
})
export class CreditsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  myCall(){
	console.log("Called");
  }

}
