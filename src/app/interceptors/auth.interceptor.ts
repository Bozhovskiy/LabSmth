import { Injectable } from "@angular/core"
import type { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http"
import type { Observable } from "rxjs"
import { AuthService } from "../services/auth.service"
import { environment } from "../../environments/environment"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Add auth header with jwt if user is logged in and request is to the api url
    const isLoggedIn = this.authService.isLoggedIn()
    const isApiUrl = request.url.startsWith(environment.apiUrl)
    const token = this.authService.getToken()

    if (isLoggedIn && isApiUrl && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    }

    return next.handle(request)
  }
}
