import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { RoleGuard } from '../shared/role.guard';
import { AdminPanelIndexComponent } from './admin-panel-index/admin-panel-index.component';
import { AdminPanelLayoutComponent } from './admin-panel-layout/admin-panel-layout.component';
import { UsersComponent } from './users/users.component';

const AdminPanelChildrenRoute: Routes = [ {
  path: '',
  component: AdminPanelIndexComponent,
  canActivate: [AuthGuard,RoleGuard]
},
{
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthGuard,RoleGuard]
}];

const routes: Routes = [
  {
    path: '',
    component: AdminPanelLayoutComponent,
    children: AdminPanelChildrenRoute 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
