import { Injectable } from '@angular/core';

@Injectable()
export class NewPartyService {

  // dummy contributors
  constructor() { }

  getSavedMenuItems(){
    return [
      {
        name: "Buger",
        itemId: 12
      },{
        name: "Pizza",
        itemId: 13
      },{
        name: "Samosa",
        itemId: 14
      },{
        name: "Tea",
        itemId: 15
      },{
        name: "Sub",
        itemId: 16
      },{
        name: "Kachori",
        itemId: 17
      },{
        name: "Coca Cola",
        itemId: 18
      }
    ];
  }

  getSavedTeamMembers(){
    return [
      {
        emailId: "ravi.prakash",
        name: "Ravi Prakash"
      },{
        emailId: "shaifali.kadyan",
        name: "Shaifali Kadyan"
      },{
        emailId: "jitendra.sarswat",
        name: "Jitendra Sarswat"
      },{
        emailId: "shanu.gupta",
        name: "Shanu Gupta"
      },{
        emailId: "arpit.gautam",
        name: "Arpit Gautam"
      },{
        emailId: "anjali.rani",
        name: "Anjali Rani"
      }
    ];
  }

  saveNewParty(form):boolean{
    return true;
  }

  getSavedDLList(){
    return [
      {
      emailId: "EngPlatformQA",
      name: "Eng Platform QA"
      },{
        emailId: "EngPlatformDev",
        name: "Eng Platform Dev"
      }
    ];
  }
}
