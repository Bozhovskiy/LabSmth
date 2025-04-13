import { Injectable } from "@angular/core"
import { CanActivate, CanLoad, Router, UrlTree } from "@angular/router"
import type { Observable } from "rxjs"
import { AuthService } from "../services/auth.service"

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth()
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth()
  }

  private checkAuth(): boolean {
    if (this.authService.isLoggedIn()) {
      return true
    }

    // Not logged in, redirect to login page
    this.router.navigate(["/login"])
    return false
  }
}
