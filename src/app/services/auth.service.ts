import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, type Observable, of, throwError } from "rxjs"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null)
  public currentUser$ = this.currentUserSubject.asObservable()
  private apiUrl = `${environment.apiUrl}/auth`

  constructor(private http: HttpClient) {
    this.loadUserFromStorage()
  }

  private loadUserFromStorage(): void {
    const userJson = localStorage.getItem("currentUser")
    if (userJson) {
      try {
        const user = JSON.parse(userJson)
        this.currentUserSubject.next(user)
      } catch (e) {
        localStorage.removeItem("currentUser")
      }
    }
  }

  login(email: string, password: string): Observable<any> {
    // In a real app, this would be a real API call
    // For demo purposes, we'll simulate a successful login
    if (email === "user@example.com" && password === "password") {
      const user = {
        id: "1",
        name: "John Parker",
        email: email,
        role: "user",
        token: "fake-jwt-token",
      }

      localStorage.setItem("currentUser", JSON.stringify(user))
      this.currentUserSubject.next(user)
      return of(user)
    }

    // Admin login
    if (email === "admin@example.com" && password === "admin123") {
      const user = {
        id: "2",
        name: "Admin User",
        email: email,
        role: "admin",
        token: "fake-admin-jwt-token",
      }

      localStorage.setItem("currentUser", JSON.stringify(user))
      this.currentUserSubject.next(user)
      return of(user)
    }

    return throwError(() => new Error("Invalid email or password"))
  }

  logout(): void {
    localStorage.removeItem("currentUser")
    this.currentUserSubject.next(null)
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value
  }

  isAdmin(): boolean {
    const user = this.currentUserSubject.value
    return user && user.role === "admin"
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value
  }

  getToken(): string | null {
    const user = this.currentUserSubject.value
    return user ? user.token : null
  }
}
