import { Component, type OnInit } from "@angular/core"
import {FormsModule, NgForm} from "@angular/forms"
import {Router, RouterLink} from "@angular/router"
import { AuthService } from "../../../services/auth.service"
import {AlertComponent} from '../../../components/shared/alert/alert.component';
import {NgClass, NgIf} from '@angular/common';
import {LoadingSpinnerComponent} from '../../../components/shared/loading-spinner/loading-spinner.component';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  imports: [
    AlertComponent,
    NgClass,
    LoadingSpinnerComponent,
    RouterLink,
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent implements OnInit {
  loading = false
  error: string | null = null
  success: string | null = null

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Redirect if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/"])
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return
    }

    this.loading = true
    this.error = null
    this.success = null

    const { email, password } = form.value

    this.authService.login(email, password).subscribe({
      next: () => {
        this.success = "Login successful!"
        this.loading = false

        // Navigate after a short delay to show success message
        setTimeout(() => {
          this.router.navigate(["/"])
        }, 1000)
      },
      error: (err) => {
        this.error = err.message || "Login failed. Please check your credentials."
        this.loading = false
      },
    })
  }
}
