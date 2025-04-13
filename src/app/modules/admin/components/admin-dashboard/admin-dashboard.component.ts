import { Component } from "@angular/core"
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class AdminDashboardComponent {}
