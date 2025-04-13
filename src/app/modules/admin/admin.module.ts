import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AdminRoutingModule } from "./admin-routing.module"
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component"
import { UserManagementComponent } from "./components/user-management/user-management.component"
import { SettingsComponent } from "./components/settings/settings.component"

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule,AdminDashboardComponent, UserManagementComponent, SettingsComponent],
})
export class AdminModule {}
