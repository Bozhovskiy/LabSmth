import { Component, type OnInit } from "@angular/core"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import {LoadingSpinnerComponent} from '../../../../components/shared/loading-spinner/loading-spinner.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {AlertComponent} from '../../../../components/shared/alert/alert.component';

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"],
  imports: [
    LoadingSpinnerComponent,
    NgIf,
    NgClass,
    ReactiveFormsModule,
    AlertComponent,
    NgForOf
  ],
  standalone: true
})
export class ReactiveFormComponent implements OnInit {
  feedbackForm!: FormGroup
  loading = false
  success: string | null = null
  error: string | null = null

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.feedbackForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      feedback: ["", [Validators.required, Validators.minLength(20)]],
      agreeTerms: [false, Validators.requiredTrue],
    })
  }

  onSubmit(): void {
    if (this.feedbackForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.feedbackForm.controls).forEach((key) => {
        const control = this.feedbackForm.get(key)
        control?.markAsTouched()
      })
      return
    }

    this.loading = true
    this.success = null
    this.error = null

    // In a real app, this would be a real API call
    // For demo purposes, we'll simulate an API response
    setTimeout(() => {
      // Simulate success
      this.success = "Thank you for your feedback!"
      this.loading = false

      // Reset form after success
      this.feedbackForm.reset()
      this.initForm()
    }, 1500)
  }
}
