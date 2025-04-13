import { Component } from "@angular/core"
import {FormsModule, NgForm} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import {LoadingSpinnerComponent} from '../../../../components/shared/loading-spinner/loading-spinner.component';
import {NgClass, NgIf} from '@angular/common';
import {AlertComponent} from '../../../../components/shared/alert/alert.component';

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"],
  imports: [
    LoadingSpinnerComponent,
    NgIf,
    NgClass,
    FormsModule,
    AlertComponent
  ],
  standalone: true
})
export class TemplateDrivenFormComponent {
  formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  }

  loading = false
  success: string | null = null
  error: string | null = null

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return
    }

    this.loading = true
    this.success = null
    this.error = null

    // In a real app, this would be a real API call
    // For demo purposes, we'll simulate an API response
    setTimeout(() => {
      // Simulate success
      this.success = "Your message has been sent successfully!"
      this.loading = false

      // Reset form after success
      form.resetForm()
      this.formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        subscribe: false,
      }
    }, 1500)
  }
}
