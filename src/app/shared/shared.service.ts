import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private auth:AuthService)
  {
    auth.jwtDecode();
    this._decodedToken = auth.decodedToken;
    this._expirationDate = auth.expirationDate;
    this._isExpired = auth.isExpired;
  }

  //-----------------------------------------------------------
  private _decodedToken: any;
  public get decodedToken(): any {
    return this._decodedToken;
  }
  public set decodedToken(value: any) {
    this._decodedToken = value;
  }
  
  //-------------------------------------------------------------
  private _expirationDate: any;
  public get expirationDate(): any {
    return this._expirationDate;
  }
  public set expirationDate(value: any) {
    this._expirationDate = value;
  }
  
  
  //-----------------------------------------------------------
  private _isExpired: any;
  public get isExpired(): any {
    return this._isExpired;
  }
  public set isExpired(value: any) {
    this._isExpired = value;
  }

  
  
}
