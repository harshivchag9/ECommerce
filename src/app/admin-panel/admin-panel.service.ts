import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(private http:HttpClient,private shared:SharedService) { }

  public getUsers(){
    var token =  localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}`,'Accept': 'application/json'})
    };
    return this.http.get(baseUrl+'users/getusers',options);
  }

  public deleteUser(id){
    debugger
    var token =  localStorage.getItem('token');
    var auth = "Bearer " + token
    const options = {
      headers: new HttpHeaders({ 'Authorization': auth,'Accept': 'application/json'})
    };
    return this.http.post(baseUrl+'users/deleteuser/'+id,'',options);
  }
}
