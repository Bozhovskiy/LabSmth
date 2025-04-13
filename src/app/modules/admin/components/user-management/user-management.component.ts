import { Component, type OnInit } from "@angular/core"
import { AdminService } from "../../services/admin.service"
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {LoadingSpinnerComponent} from '../../../../components/shared/loading-spinner/loading-spinner.component';
import {AlertComponent} from '../../../../components/shared/alert/alert.component';

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
  imports: [
    NgClass,
    LoadingSpinnerComponent,
    NgIf,
    AlertComponent,
    NgForOf
  ],
  standalone: true
})
export class UserManagementComponent implements OnInit {
  users: any[] = []
  loading = true
  error: string | null = null

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.loading = true
    this.error = null

    this.adminService.getUsers().subscribe({
      next: (users) => {
        this.users = users
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load users. Please try again."
        this.loading = false
        console.error("Error loading users:", err)
      },
    })
  }

  toggleUserStatus(userId: string): void {
    const user = this.users.find((u) => u.id === userId)
    if (user) {
      user.active = !user.active

      this.adminService.updateUserStatus(userId, user.active).subscribe({
        error: (err) => {
          // Revert the change on error
          user.active = !user.active
          this.error = "Failed to update user status. Please try again."
          console.error("Error updating user status:", err)
        },
      })
    }
  }

  deleteUser(userId: string): void {
    if (confirm("Are you sure you want to delete this user?")) {
      this.adminService.deleteUser(userId).subscribe({
        next: () => {
          this.users = this.users.filter((u) => u.id !== userId)
        },
        error: (err) => {
          this.error = "Failed to delete user. Please try again."
          console.error("Error deleting user:", err)
        },
      })
    }
  }
}
