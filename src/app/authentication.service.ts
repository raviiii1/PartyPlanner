import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';
import { Credentials } from './credentials';

@Injectable()
export class AuthenticationService {

  isAdminFlag : boolean = false;
  isLoggedInFlag : boolean = false;
  head: Headers;
  
  constructor(private http : Http, private jwtHelper:JwtHelper) { }

  login(credentials):Observable<Response>{
	this.head = new Headers();
    this.head.append('Content-Type','application/json; charset=utf-8');
    this.head.append('Accept','application/json');
    return this.http.post(
        "http://localhost:8085/partyplan/login",
        JSON.stringify({
                        	username:credentials.username,
                        	password:credentials.password
                        }),
        {
          headers : this.head
        });
  }
  
  setLocalStorage(token:string){
	  let decodedToken = this.jwtHelper.decodeToken(token);
	  let userData = JSON.stringify({
			userInfo : decodedToken,
			token : token
	  });
	  if(decodedToken.roles.includes("ROLE_USER"))
		  this.isLoggedInFlag = true;
	  if(decodedToken.roles.includes("ROLE_ADMIN"))
		  this.isAdminFlag = true;
	  
	  localStorage.setItem('currentUser',userData);
  }
  
  isTokenExpired(token:string){
	  this.jwtHelper.isTokenExpired(token);
  }
  
  getToken(){
	return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  isAdmin(){
	var userDate = localStorage.getItem('currentUser');
	if(userDate || userDate === '')
		return JSON.parse(userDate).userInfo.roles.includes("ROLE_ADMIN");
	return false;
  }

  isLoggedIn(){
	var userDate = localStorage.getItem('currentUser');
	if(userDate || userDate === '')
		return JSON.parse(userDate).userInfo.roles.includes("ROLE_USER");
	return false;
  }

  logout(){
	localStorage.removeItem('currentUser');
  }
}
