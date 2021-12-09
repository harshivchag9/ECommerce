import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient,private shared:SharedService) { }

  public fetchUserData(){
    var email = this.shared.decodedToken['Email'];
    const formData = new FormData();
    formData.append('email',email)
    var token =  localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}`,'Accept': 'application/json'})
    };
    return this.http.post(baseUrl+'users/getuserdetails', formData,options);
  }

}
