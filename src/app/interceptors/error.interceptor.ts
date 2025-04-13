import { Injectable } from "@angular/core"
import type { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http"
import { type Observable, throwError } from "rxjs"
import { catchError } from "rxjs/operators"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if ([401, 403].includes(error.status) && this.authService.isLoggedIn()) {
          // Auto logout if 401 or 403 response returned from api
          this.authService.logout()
          this.router.navigate(["/login"])
        }

        // Get error message from server or use default
        const errorMessage = error.error?.message || error.statusText || "Unknown error occurred"
        return throwError(() => new Error(errorMessage))
      }),
    )
  }
}
