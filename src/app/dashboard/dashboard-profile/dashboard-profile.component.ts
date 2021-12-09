import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  public user:any;
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.fetchUserData().subscribe(data=>{
      this.user = data['0'];
    });
  }

}
