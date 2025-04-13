import { Component } from "@angular/core"
import {Router, RouterLink, RouterLinkActive} from "@angular/router"
import { AuthService } from "../../../services/auth.service"
import {NgIf} from '@angular/common';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  standalone: true
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    this.authService.logout()
    this.router.navigate(["/login"])
  }
}
