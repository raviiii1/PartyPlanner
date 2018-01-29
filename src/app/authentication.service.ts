import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  isAdminFlag : boolean = false;
  isLoggedInFlag : boolean = false;

  constructor() { }

  login(credentials){
    if(!credentials.username || credentials.username === "")
      return false;
    if(!credentials.password || credentials.password === "")
      return false;
    if(credentials.username === "admin@123")
      this.isAdminFlag = true;
    this.isLoggedInFlag = true;
    return true;
  }

  isAdmin(){
    return this.isAdminFlag;
  }

  isLoggedIn(){
    return this.isLoggedInFlag;
  }

  logout(){
    this.isAdminFlag = false;
    this.isLoggedInFlag = false;
  }
}
