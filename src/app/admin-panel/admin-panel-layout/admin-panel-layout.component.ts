import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-panel-layout',
  templateUrl: './admin-panel-layout.component.html',
  styleUrls: ['./admin-panel-layout.component.scss']
})
export class AdminPanelLayoutComponent implements OnInit {

  isLessThenLargeDevice;
  constructor(private auth:AuthService,private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }
  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['auth/login']);
  }

}
