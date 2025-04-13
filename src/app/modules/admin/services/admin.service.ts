import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { type Observable, of, throwError } from "rxjs"
import { delay } from "rxjs/operators"
import { environment } from "../../../../environments/environment"

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private apiUrl = `${environment.apiUrl}/admin`

  // Mock data
  private mockUsers = [
    { id: "1", name: "John Parker", email: "user@example.com", role: "user", active: true },
    { id: "2", name: "Admin User", email: "admin@example.com", role: "admin", active: true },
    { id: "3", name: "Jane Smith", email: "jane@example.com", role: "user", active: true },
    { id: "4", name: "Bob Johnson", email: "bob@example.com", role: "user", active: false },
  ]

  private mockSettings = {
    siteName: "Angular CV",
    siteDescription: "Professional CV and Portfolio Application",
    contactEmail: "admin@example.com",
    enableRegistration: true,
    maintenanceMode: false,
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    // In a real app, this would be a real API call
    return of([...this.mockUsers]).pipe(delay(800))
  }

  updateUserStatus(userId: string, active: boolean): Observable<any> {
    // In a real app, this would be a real API call
    const user = this.mockUsers.find((u) => u.id === userId)
    if (user) {
      user.active = active
      return of({ success: true }).pipe(delay(500))
    }
    return throwError(() => new Error("User not found"))
  }

  deleteUser(userId: string): Observable<any> {
    // In a real app, this would be a real API call
    const index = this.mockUsers.findIndex((u) => u.id === userId)
    if (index !== -1) {
      this.mockUsers.splice(index, 1)
      return of({ success: true }).pipe(delay(500))
    }
    return throwError(() => new Error("User not found"))
  }

  getSettings(): Observable<any> {
    // In a real app, this would be a real API call
    return of({ ...this.mockSettings }).pipe(delay(800))
  }

  updateSettings(settings: any): Observable<any> {
    // In a real app, this would be a real API call
    this.mockSettings = { ...settings }
    return of({ success: true }).pipe(delay(1000))
  }
}
