import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminPanelLayoutComponent } from './admin-panel-layout/admin-panel-layout.component';
import { AdminPanelIndexComponent } from './admin-panel-index/admin-panel-index.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    UsersComponent,
    AdminPanelLayoutComponent,
    AdminPanelIndexComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    CommonModule,
    SharedModule, 
    MatMenuModule
  ]
})
export class AdminPanelModule { }
