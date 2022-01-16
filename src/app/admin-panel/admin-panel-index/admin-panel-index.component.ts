import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-admin-panel-index',
  templateUrl: './admin-panel-index.component.html',
  styleUrls: ['./admin-panel-index.component.scss']
})
export class AdminPanelIndexComponent implements OnInit {

  constructor(private _notificationSvc: NotificationService) { }

  ngOnInit(): void {
  }
  sendInfo() {
    this._notificationSvc.warning('Hello World', 'This is an information', 5000);
  }

}
