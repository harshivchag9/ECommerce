import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkRole(route, state.url);
  }
  

  checkRole(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.jwtDecode()) {
      let role = this.authService.decodedToken['role'];
      if(role==9)
      {
        return true;
      }
      alert("You dont have access to this page.");
    }
    this.router.navigate(['/']);
    return false;
  }
}
