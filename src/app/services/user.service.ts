import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { type Observable, of, throwError } from "rxjs"
import { catchError, delay } from "rxjs/operators"
import { environment } from "../../environments/environment"
import { AuthService } from "./auth.service"

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`
  private mockUserProfile = {
    id: "1",
    name: "John Parker",
    email: "user@example.com",
    bio: "Graphic & Web Designer with over 10 years of experience.",
    phone: "+1-856-822-2156",
    address: "1173 Valley Street, Camden, NJ 08102",
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getUserProfile(): Observable<any> {
    // In a real app, this would be a real API call
    // For demo purposes, we'll simulate an API response
    const currentUser = this.authService.getCurrentUser()

    if (!currentUser) {
      return throwError(() => new Error("User not authenticated"))
    }

    // If admin, return admin profile
    if (currentUser.role === "admin") {
      return of({
        id: "2",
        name: "Admin User",
        email: "admin@example.com",
        bio: "System administrator",
        phone: "+1-800-555-1234",
        address: "Admin Office",
      }).pipe(delay(800))
    }

    return of(this.mockUserProfile).pipe(
      delay(800),
      catchError((error) => throwError(() => new Error("Failed to load user profile"))),
    )
  }

  updateUserProfile(profile: any): Observable<any> {
    // In a real app, this would be a real API call
    // For demo purposes, we'll simulate an API response
    const currentUser = this.authService.getCurrentUser()

    if (!currentUser) {
      return throwError(() => new Error("User not authenticated"))
    }

    // Update the mock profile
    this.mockUserProfile = { ...this.mockUserProfile, ...profile }

    return of({ success: true, message: "Profile updated successfully" }).pipe(
      delay(1000),
      catchError((error) => throwError(() => new Error("Failed to update profile"))),
    )
  }
}
