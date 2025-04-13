import { Routes } from "@angular/router"
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component"
import { UserManagementComponent } from "./components/user-management/user-management.component"
import { SettingsComponent } from "./components/settings/settings.component"
import { AdminGuard } from "../../guards/admin.guard"

export const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: "", redirectTo: "users", pathMatch: "full" },
      { path: "users", component: UserManagementComponent },
      { path: "settings", component: SettingsComponent },
    ],
  },
]
