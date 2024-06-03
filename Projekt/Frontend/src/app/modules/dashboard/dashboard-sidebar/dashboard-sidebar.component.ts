import { Component } from '@angular/core';
import { dashboardSidebarItems } from "./dashboard.sidebar.items";

@Component({
  selector: 'tasty-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent {
  public _dashboardSidebarItems = dashboardSidebarItems;
}
