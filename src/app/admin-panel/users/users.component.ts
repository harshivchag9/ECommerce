import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';
import { Roles } from 'src/environments/environment';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public roles = Roles;
  public users:any;
  constructor(private _notificationSvc:NotificationService, private adminService:AdminPanelService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(result=>{
      this.users = result;
    });
  }

  deleteUser(user){
    this.adminService.deleteUser(user.id).subscribe(result => {
      this._notificationSvc.success('Hello World', result['responseMsg'], 5000);
    })
  }
}
