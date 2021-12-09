import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  token:any;
  decodedToken:any;
  expirationDate:any;
  isExpired:any;
  helper:any;

  constructor(private http:HttpClient) { }
  
  public login(data){
    const options = {
      headers: new HttpHeaders().set('Accept', 'application/json')
    };
    return this.http.post(baseUrl+'users/login', data,options);
  }
  public register(data) {
    const options = {
      headers: new HttpHeaders().set('Accept', 'application/json')
    };
    return this.http.post(baseUrl+'users/register', data,options);
  }


  public logout(){
    localStorage.removeItem("token");
    return true;
  }

  jwtDecode()
  {
    let token = localStorage.getItem("token");
    if(token) {
      this.helper = new JwtHelperService();
      this.decodedToken = this.helper.decodeToken(token);
      this.expirationDate = this.helper.getTokenExpirationDate(token);
      this.isExpired = this.helper.isTokenExpired(token);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    if(this.jwtDecode()){
      return !this.isExpired;
    }    
    return false
    
  }
    
 
}
